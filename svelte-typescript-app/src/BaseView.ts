import {
    ApiApi, Configuration
} from "./client-ts";
import {getCookie} from "./Cookie";

export interface ResultInterface<T> {
    count?: number;
    next?: string;
    previous?: string;
    results?: Array<T>;
}

export interface BaseAbstract {
    readonly attributeTypeMap: Array<any>
    list(api: ApiApi, page?: number, options?: Configuration): Promise<any>
    retrieve(api: ApiApi, id: string, options?: Configuration): Promise<any>
    create(api: ApiApi, obj?: any, options?: Configuration): Promise<any>
    update(api: ApiApi, id: string, obj?: any, options?: Configuration): Promise<any>
    destroy(api: ApiApi, id: string, options?: Configuration): Promise<void>
}

export interface Base<T> {
    readonly attributeTypeMap: Array<any>
    Fields
    list(api: ApiApi, page?: number, options?: Configuration): Promise<any>
    retrieve(api: ApiApi, id: string, options?: Configuration): Promise<T>
    create(api: ApiApi, obj?: T, options?: Configuration): Promise<T>
    update(api: ApiApi, id: string, obj?: T, options?: Configuration): Promise<T>
    destroy(api: ApiApi, id: string, options?: Configuration): Promise<void>
}

// class CSRFHttpLibrary extends IsomorphicFetchHttpLibrary {
//     send(request: RequestContext): Observable<ResponseContext> {
//         request.setHeaderParam('X-CSRFToken', getCookie('csrftoken'));
//         return super.send(request);
//     }
// }


export class BaseView<T extends Base<T>> {
    public api: ApiApi;
    public model: Base<T>;

    public fields: Array<T['Fields']>

    constructor() {
        this.api = new ApiApi(
            new Configuration({
                'basePath': '',
                'fetchApi': window.fetch.bind(window),
            })
        );
    }

    getQuery(page?: number): Promise<ResultInterface<T>> {
        return this.model.list(this.api, page)
    }

    public pagesCount = 1;
    public currentPage = 1;
    public pageSize = 10;

    getQueryInternal(page?: number): Promise<ResultInterface<T>> {
        let promise = this.getQuery(page);
        promise.then(value => {
            this.pagesCount = Math.ceil(value.count / this.pageSize);
        })
        this.currentPage = page;
        return promise;
    }
}
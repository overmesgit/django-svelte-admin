import {
    ApiApi,
    createConfiguration,
    IsomorphicFetchHttpLibrary, RequestContext, ResponseContext,
    ServerConfiguration
} from "./client-ts";
import type {URI} from "./client-ts/models/URI";
import {getCookie} from "./Cookie";
import type {Observable} from "./client-ts/dist/rxjsStub";

export interface ResultInterface {
    count?: number;
    next?: URI;
    previous?: URI;
    results?: Array<any>;
}

export interface AttributeTypeMap {
    readonly attributeTypeMap: Array<any>
    getAttributeTypeMap: () => any
}


class CSRFHttpLibrary extends IsomorphicFetchHttpLibrary {
    send(request: RequestContext): Observable<ResponseContext> {
        request.setHeaderParam('X-CSRFToken', getCookie('csrftoken'));
        return super.send(request);
    }
}


export class BaseView {
    public api: ApiApi;
    public model: AttributeTypeMap;

    constructor() {
        this.api = new ApiApi(createConfiguration({
            'baseServer': new ServerConfiguration('http://127.0.0.1:8000', {}),
            'httpApi': new CSRFHttpLibrary(),
        }));
    }

    getQuery(page?: number): Promise<ResultInterface> {
        return new Promise(a => []);
    }

    public pagesCount = 1;
    public currentPage = 1;
    public pageSize = 10;

    getQueryInternal(page?: number): Promise<ResultInterface> {
        let promise = this.getQuery(page);
        promise.then(value => {
            this.pagesCount = Math.ceil(value.count/this.pageSize);
        })
        this.currentPage = page;
        return promise;
    }
}
import {
    ApiApi, Configuration
} from "./client-ts";
import {getCookie} from "./Cookie";
import type {SvelteComponent} from "svelte";

export interface ResultInterface<T> {
    count?: number;
    next?: string;
    previous?: string;
    results?: Array<T>;
}

export interface Base<T> {
    id?: number;
    readonly attributeTypeMap: {[name: string]: {baseName: string, type: string, format: string} }
    Fields
    // Fields: {[s: string]: string}

    list(api: ApiApi, page?: number): Promise<ResultInterface<T>>

    retrieve(api: ApiApi, id: string): Promise<T>

    create(api: ApiApi, obj?: T): Promise<T>

    update(api: ApiApi, id: string, obj?: T): Promise<T>

    destroy(api: ApiApi, id: string): Promise<void>
}

// class CSRFHttpLibrary extends IsomorphicFetchHttpLibrary {
//     send(request: RequestContext): Observable<ResponseContext> {
//         request.setHeaderParam('X-CSRFToken', getCookie('csrftoken'));
//         return super.send(request);
//     }
// }

export enum Variables {
    All = 'All'
}

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

type OptionsFlags<Type> = {
  [key in keyof Type]: SvelteComponent;
};


export class BaseView<T extends Base<T>> {
    public api: ApiApi;
    public model: Base<T>;

    public fields: Array<T['Fields']> | Variables.All


    // public widgets: {[s: string]: SvelteComponent} = {}
    public widgets: OptionsFlags<T['Fields']> = {} as OptionsFlags<T['Fields']>

    constructor() {
        this.api = new ApiApi(
            new Configuration({
                'basePath': '',
                'fetchApi': window.fetch.bind(window),
            })
        );
    }

    getFieldWidget(field: T['Fields']): SvelteComponent {
        return this.widgets[field]
    }

    getFields(): Array<T['Fields']> {
        if (this.fields === Variables.All) {
            return Object.values(this.model.Fields)
        } else {
            return this.fields
        }
    }

    getQuery(page?: number): Promise<ResultInterface<T>> {
        return this.model.list(this.api, page)
    }

    getObject(id: string): Promise<T> {
        return this.model.retrieve(this.api, id)
    }

    save(obj: T): Promise<T> {
        return this.model.update(this.api, obj.id.toString(), obj)
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
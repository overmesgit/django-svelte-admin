import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { Group } from '../models/Group';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { User } from '../models/User';

import { ObservableApiApi } from "./ObservableAPI";
import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";

export interface ApiApiCreateAuthorRequest {
    /**
     * 
     * @type Author
     * @memberof ApiApicreateAuthor
     */
    author?: Author
}

export interface ApiApiCreateBookRequest {
    /**
     * 
     * @type Book
     * @memberof ApiApicreateBook
     */
    book?: Book
}

export interface ApiApiCreateGroupRequest {
    /**
     * 
     * @type Group
     * @memberof ApiApicreateGroup
     */
    group?: Group
}

export interface ApiApiCreateUserRequest {
    /**
     * 
     * @type User
     * @memberof ApiApicreateUser
     */
    user?: User
}

export interface ApiApiDestroyAuthorRequest {
    /**
     * A unique integer value identifying this author.
     * @type string
     * @memberof ApiApidestroyAuthor
     */
    id: string
}

export interface ApiApiDestroyBookRequest {
    /**
     * A unique integer value identifying this book.
     * @type string
     * @memberof ApiApidestroyBook
     */
    id: string
}

export interface ApiApiDestroyGroupRequest {
    /**
     * A unique integer value identifying this group.
     * @type string
     * @memberof ApiApidestroyGroup
     */
    id: string
}

export interface ApiApiDestroyUserRequest {
    /**
     * A unique integer value identifying this user.
     * @type string
     * @memberof ApiApidestroyUser
     */
    id: string
}

export interface ApiApiListAuthorsRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof ApiApilistAuthors
     */
    page?: number
}

export interface ApiApiListBooksRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof ApiApilistBooks
     */
    page?: number
}

export interface ApiApiListGroupsRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof ApiApilistGroups
     */
    page?: number
}

export interface ApiApiListUsersRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof ApiApilistUsers
     */
    page?: number
}

export interface ApiApiPartialUpdateAuthorRequest {
    /**
     * A unique integer value identifying this author.
     * @type string
     * @memberof ApiApipartialUpdateAuthor
     */
    id: string
    /**
     * 
     * @type Author
     * @memberof ApiApipartialUpdateAuthor
     */
    author?: Author
}

export interface ApiApiPartialUpdateBookRequest {
    /**
     * A unique integer value identifying this book.
     * @type string
     * @memberof ApiApipartialUpdateBook
     */
    id: string
    /**
     * 
     * @type Book
     * @memberof ApiApipartialUpdateBook
     */
    book?: Book
}

export interface ApiApiPartialUpdateGroupRequest {
    /**
     * A unique integer value identifying this group.
     * @type string
     * @memberof ApiApipartialUpdateGroup
     */
    id: string
    /**
     * 
     * @type Group
     * @memberof ApiApipartialUpdateGroup
     */
    group?: Group
}

export interface ApiApiPartialUpdateUserRequest {
    /**
     * A unique integer value identifying this user.
     * @type string
     * @memberof ApiApipartialUpdateUser
     */
    id: string
    /**
     * 
     * @type User
     * @memberof ApiApipartialUpdateUser
     */
    user?: User
}

export interface ApiApiRetrieveAuthorRequest {
    /**
     * A unique integer value identifying this author.
     * @type string
     * @memberof ApiApiretrieveAuthor
     */
    id: string
}

export interface ApiApiRetrieveBookRequest {
    /**
     * A unique integer value identifying this book.
     * @type string
     * @memberof ApiApiretrieveBook
     */
    id: string
}

export interface ApiApiRetrieveGroupRequest {
    /**
     * A unique integer value identifying this group.
     * @type string
     * @memberof ApiApiretrieveGroup
     */
    id: string
}

export interface ApiApiRetrieveUserRequest {
    /**
     * A unique integer value identifying this user.
     * @type string
     * @memberof ApiApiretrieveUser
     */
    id: string
}

export interface ApiApiUpdateAuthorRequest {
    /**
     * A unique integer value identifying this author.
     * @type string
     * @memberof ApiApiupdateAuthor
     */
    id: string
    /**
     * 
     * @type Author
     * @memberof ApiApiupdateAuthor
     */
    author?: Author
}

export interface ApiApiUpdateBookRequest {
    /**
     * A unique integer value identifying this book.
     * @type string
     * @memberof ApiApiupdateBook
     */
    id: string
    /**
     * 
     * @type Book
     * @memberof ApiApiupdateBook
     */
    book?: Book
}

export interface ApiApiUpdateGroupRequest {
    /**
     * A unique integer value identifying this group.
     * @type string
     * @memberof ApiApiupdateGroup
     */
    id: string
    /**
     * 
     * @type Group
     * @memberof ApiApiupdateGroup
     */
    group?: Group
}

export interface ApiApiUpdateUserRequest {
    /**
     * A unique integer value identifying this user.
     * @type string
     * @memberof ApiApiupdateUser
     */
    id: string
    /**
     * 
     * @type User
     * @memberof ApiApiupdateUser
     */
    user?: User
}


export class ObjectApiApi {
    private api: ObservableApiApi

    public constructor(configuration: Configuration, requestFactory?: ApiApiRequestFactory, responseProcessor?: ApiApiResponseProcessor) {
        this.api = new ObservableApiApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public createAuthor(param: ApiApiCreateAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.createAuthor(param.author,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public createBook(param: ApiApiCreateBookRequest, options?: Configuration): Promise<Book> {
        return this.api.createBook(param.book,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public createGroup(param: ApiApiCreateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.createGroup(param.group,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public createUser(param: ApiApiCreateUserRequest, options?: Configuration): Promise<User> {
        return this.api.createUser(param.user,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public destroyAuthor(param: ApiApiDestroyAuthorRequest, options?: Configuration): Promise<void> {
        return this.api.destroyAuthor(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public destroyBook(param: ApiApiDestroyBookRequest, options?: Configuration): Promise<void> {
        return this.api.destroyBook(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public destroyGroup(param: ApiApiDestroyGroupRequest, options?: Configuration): Promise<void> {
        return this.api.destroyGroup(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public destroyUser(param: ApiApiDestroyUserRequest, options?: Configuration): Promise<void> {
        return this.api.destroyUser(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public listAuthors(param: ApiApiListAuthorsRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.listAuthors(param.page,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public listBooks(param: ApiApiListBooksRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.listBooks(param.page,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public listGroups(param: ApiApiListGroupsRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.listGroups(param.page,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public listUsers(param: ApiApiListUsersRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.listUsers(param.page,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public partialUpdateAuthor(param: ApiApiPartialUpdateAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.partialUpdateAuthor(param.id, param.author,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public partialUpdateBook(param: ApiApiPartialUpdateBookRequest, options?: Configuration): Promise<Book> {
        return this.api.partialUpdateBook(param.id, param.book,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public partialUpdateGroup(param: ApiApiPartialUpdateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.partialUpdateGroup(param.id, param.group,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public partialUpdateUser(param: ApiApiPartialUpdateUserRequest, options?: Configuration): Promise<User> {
        return this.api.partialUpdateUser(param.id, param.user,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public retrieveAuthor(param: ApiApiRetrieveAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.retrieveAuthor(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public retrieveBook(param: ApiApiRetrieveBookRequest, options?: Configuration): Promise<Book> {
        return this.api.retrieveBook(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public retrieveGroup(param: ApiApiRetrieveGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.retrieveGroup(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public retrieveUser(param: ApiApiRetrieveUserRequest, options?: Configuration): Promise<User> {
        return this.api.retrieveUser(param.id,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public updateAuthor(param: ApiApiUpdateAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.updateAuthor(param.id, param.author,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public updateBook(param: ApiApiUpdateBookRequest, options?: Configuration): Promise<Book> {
        return this.api.updateBook(param.id, param.book,  options).toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param param the request object
     */
    public updateGroup(param: ApiApiUpdateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.updateGroup(param.id, param.group,  options).toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param param the request object
     */
    public updateUser(param: ApiApiUpdateUserRequest, options?: Configuration): Promise<User> {
        return this.api.updateUser(param.id, param.user,  options).toPromise();
    }
	

}




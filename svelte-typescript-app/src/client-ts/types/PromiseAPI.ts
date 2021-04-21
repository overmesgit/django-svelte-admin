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
import { ObservableApiApi } from './ObservableAPI';


import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";
export class PromiseApiApi {
    private api: ObservableApiApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiApiRequestFactory,
        responseProcessor?: ApiApiResponseProcessor
    ) {
        this.api = new ObservableApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param author 
     */
    public createAuthor(author?: Author, options?: Configuration): Promise<Author> {
    	const result = this.api.createAuthor(author, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param book 
     */
    public createBook(book?: Book, options?: Configuration): Promise<Book> {
    	const result = this.api.createBook(book, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param group 
     */
    public createGroup(group?: Group, options?: Configuration): Promise<Group> {
    	const result = this.api.createGroup(group, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param user 
     */
    public createUser(user?: User, options?: Configuration): Promise<User> {
    	const result = this.api.createUser(user, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this author.
     */
    public destroyAuthor(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.destroyAuthor(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this book.
     */
    public destroyBook(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.destroyBook(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this group.
     */
    public destroyGroup(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.destroyGroup(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     */
    public destroyUser(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.destroyUser(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param page A page number within the paginated result set.
     */
    public listAuthors(page?: number, options?: Configuration): Promise<InlineResponse2002> {
    	const result = this.api.listAuthors(page, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param page A page number within the paginated result set.
     */
    public listBooks(page?: number, options?: Configuration): Promise<InlineResponse2003> {
    	const result = this.api.listBooks(page, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param page A page number within the paginated result set.
     */
    public listGroups(page?: number, options?: Configuration): Promise<InlineResponse2001> {
    	const result = this.api.listGroups(page, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param page A page number within the paginated result set.
     */
    public listUsers(page?: number, options?: Configuration): Promise<InlineResponse200> {
    	const result = this.api.listUsers(page, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this author.
     * @param author 
     */
    public partialUpdateAuthor(id: string, author?: Author, options?: Configuration): Promise<Author> {
    	const result = this.api.partialUpdateAuthor(id, author, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this book.
     * @param book 
     */
    public partialUpdateBook(id: string, book?: Book, options?: Configuration): Promise<Book> {
    	const result = this.api.partialUpdateBook(id, book, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this group.
     * @param group 
     */
    public partialUpdateGroup(id: string, group?: Group, options?: Configuration): Promise<Group> {
    	const result = this.api.partialUpdateGroup(id, group, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     * @param user 
     */
    public partialUpdateUser(id: string, user?: User, options?: Configuration): Promise<User> {
    	const result = this.api.partialUpdateUser(id, user, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this author.
     */
    public retrieveAuthor(id: string, options?: Configuration): Promise<Author> {
    	const result = this.api.retrieveAuthor(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this book.
     */
    public retrieveBook(id: string, options?: Configuration): Promise<Book> {
    	const result = this.api.retrieveBook(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this group.
     */
    public retrieveGroup(id: string, options?: Configuration): Promise<Group> {
    	const result = this.api.retrieveGroup(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     */
    public retrieveUser(id: string, options?: Configuration): Promise<User> {
    	const result = this.api.retrieveUser(id, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this author.
     * @param author 
     */
    public updateAuthor(id: string, author?: Author, options?: Configuration): Promise<Author> {
    	const result = this.api.updateAuthor(id, author, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this book.
     * @param book 
     */
    public updateBook(id: string, book?: Book, options?: Configuration): Promise<Book> {
    	const result = this.api.updateBook(id, book, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows groups to be viewed or edited.
     * @param id A unique integer value identifying this group.
     * @param group 
     */
    public updateGroup(id: string, group?: Group, options?: Configuration): Promise<Group> {
    	const result = this.api.updateGroup(id, group, options);
        return result.toPromise();
    }
	
    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     * @param user 
     */
    public updateUser(id: string, user?: User, options?: Configuration): Promise<User> {
    	const result = this.api.updateUser(id, user, options);
        return result.toPromise();
    }
	

}




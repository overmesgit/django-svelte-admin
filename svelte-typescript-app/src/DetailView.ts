import {Base, BaseView} from "./BaseView";


export class DetailView<T extends Base<T>> extends BaseView<T> {
    edit = false
}
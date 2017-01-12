
import {bindable} from "aurelia-framework";

export class ProjectImageVM {
    @bindable image:string;
    activate(model) {
        this.image = model.image;
    }

}

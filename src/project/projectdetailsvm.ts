import Project from "./project";
import ProjectObject from "./projectobject";
import {bindable, inject} from "aurelia-framework";
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class projectdetailsvm {

    constructor(controller) {
        controller.settings.lock = false;
    }

    @bindable public project : Project;
    @bindable public currentobjind : number = -1;
    activate(model) {
        this.project = model;
        if(this.project.objects !== undefined && this.project.objects.length != 0)
            this.currentobjind = 0;
    }

    hasObjControls() {
        return this.project.objects !== undefined && this.project.objects.length > 1;
    }

    next(){
        if(this.project.objects !== undefined && this.project.objects.length != 0){
            this.currentobjind = (this.currentobjind + 1) % this.project.objects.length
        }
    }

    previous() {
        if(this.project.objects !== undefined && this.project.objects.length != 0){
            this.currentobjind--;
            if(this.currentobjind < 0)
                this.currentobjind = this.project.objects.length-1;
        }
    }

}
/*	This file is part of Personal page.
	https://github.com/bngreen/personal-page

    Personal page is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Personal page is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Personal page.  If not, see <http://www.gnu.org/licenses/>.
*/

import Project from "./project";
import ProjectObject from "./projectobject";
import {bindable, inject} from "aurelia-framework";
import {DialogController} from 'aurelia-dialog';

import 'github-fork-ribbon-css/gh-fork-ribbon.css!';

@inject(DialogController)
export class projectdetailsvm {
    public controller;
    constructor(controller) {
        controller.settings.lock = false;
        this.controller = controller;
    }

    @bindable public project : Project;
    @bindable public currentobjind : number = -1;
    activate(model) {
        this.project = model;
        if(this.project.objects !== undefined && this.project.objects.length != 0)
            this.currentobjind = 0;
    }

    contentstyle() {
        if(this.project.contentHeight !== null)
            return "min-height:"+this.project.contentHeight;
        else return "";
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
import Project from "./project";
import {inject, bindable} from "aurelia-framework";

import {DialogService} from 'aurelia-dialog';
import {projectdetailsvm} from './projectdetailsvm';

@inject(DialogService)
export class projectvm {
    @bindable public project : Project;
    private dialogService;
    constructor(dialogService){
        this.dialogService = dialogService;
    }

    openDetails(){
        this.dialogService.open({viewModel: projectdetailsvm, model: this.project});
    }
}
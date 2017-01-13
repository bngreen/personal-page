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
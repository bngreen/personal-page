import ProjectObject from './projectobject';

export default class ProjectImage implements ProjectObject{
    public view = "./projectimagevm";

    constructor(public image:string){

    }

}


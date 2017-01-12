import ProjectObject from './projectobject';

export default class ProjectAudio implements ProjectObject{
    public view = "./projectaudiovm";

    constructor(public audio:string, public title:string, public description:string, public url:string){

    }

}
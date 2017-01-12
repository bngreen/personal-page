
import ProjectObject from './projectobject';

export default class Project {
    constructor(public title:string, public mainImage:string, public description:string, public objects:ProjectObject[], public detailsview:string = null){

    }

}

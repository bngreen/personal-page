// import {computedFrom} from 'aurelia-framework';

import ProjectImage from "./project/projectimage";
import ProjectObject from "./project/projectobject";
import ProjectAudio from "./project/projectaudio";
import Projects from "./project/projects";

export class Welcome {
  public heading = 'Welcome to the Aurelia Navigation App!';
  public firstName = 'John';
  public lastName = 'Doe';
  private previousValue = this.fullName;

  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  // To optimize by declaring the properties that this getter is computed from, uncomment the line below
  // as well as the corresponding import above.
  // @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }

  public test:ProjectObject = new ProjectAudio(
    "/audio/oclequalizer/Seeing-The-Future-by-Dexter-Britain.mp3", 
    "Seeing The Future by Dexter Britain", 
    "Audio modified by equalizer",
    "http://freemusicarchive.org/music/Dexter_Britain/Creative_Commons_Volume_2/Seeing_The_Future");//new ProjectImage("/images/aplayer/1.png");

  public projects = Projects.projects;
  
}

export class UpperValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}

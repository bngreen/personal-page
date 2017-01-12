import {bindable} from "aurelia-framework";
import ProjectAudio from "./projectaudio";

export class ProjectAudioVM {
    @bindable audio:ProjectAudio;
    activate(model) {
        this.audio = model;
    }

}
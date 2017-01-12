import Project from "./project";
import ProjectAudio from "./projectaudio";
import ProjectImage from "./projectimage";

export default class Projects {
    public static projects : Project[] = [
        new Project("OpenCL Equalizer", "/images/openclequalizer/1.png", "test", [
            new ProjectImage("/images/openclequalizer/1.png"),
            new ProjectAudio(
                "/audio/oclequalizer/Seeing-The-Future-by-Dexter-Britain.mp3", 
                "Seeing The Future by Dexter Britain", 
                "Audio modified by equalizer",
                "http://freemusicarchive.org/music/Dexter_Britain/Creative_Commons_Volume_2/Seeing_The_Future")
        ])
    ];
}

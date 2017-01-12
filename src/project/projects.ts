import Project from "./project";
import ProjectAudio from "./projectaudio";
import ProjectImage from "./projectimage";

export default class Projects {
    public static projects : Project[] = [
        new Project("OpenCL Audio Equalizer", "/images/openclequalizer/1.png", 
        "Audio equalizer using OpenCL implementing twelve 1000 order FIR filters running in real-time in the GPU. <a href='https://github.com/bngreen/OpenCL-Equalizer'><i class='fa fa-github-square fa-3x' aria-hidden='true'></i></a>",
         [
            new ProjectImage("/images/openclequalizer/1.png"),
            new ProjectAudio(
                "/audio/oclequalizer/Seeing-The-Future-by-Dexter-Britain.mp3", 
                "Seeing The Future by Dexter Britain", 
                "Audio modified by equalizer",
                "http://freemusicarchive.org/music/Dexter_Britain/Creative_Commons_Volume_2/Seeing_The_Future"),
            new ProjectAudio(
                "/audio/oclequalizer/Enter The World of Paradise by D SMILEZ.mp3", 
                "Enter The World of Paradise by D SMILEZ", 
                "Audio modified by equalizer",
                "http://freemusicarchive.org/music/D_SMILEZ/Melody__Beats/Enter_The_World_of_Paradise"),
            new ProjectAudio(
                "/audio/oclequalizer/O Fortuna by Dr. Phibes and The Ten Plagues of Egypt.mp3", 
                "O Fortuna by Dr. Phibes and The Ten Plagues of Egypt", 
                "Audio modified by equalizer",
                "https://freemusicarchive.org/music/Dr_Phibes_and_The_Ten_Plagues_of_Egypt/Carmina_Burana/Carmina_Burana_01"),
            new ProjectAudio(
                "/audio/oclequalizer/Summers-Coming-by-Dexter-Britain.mp3", 
                "Summers Coming by Dexter Britain", 
                "Audio modified by equalizer",
                "http://freemusicarchive.org/music/Dexter_Britain/Creative_Commons_Volume_2/Summers_Coming"),
        ],
        
        )
    ];
}

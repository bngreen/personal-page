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
import ProjectAudio from "./projectaudio";
import ProjectImage from "./projectimage";
import ProjectVideo from "./projectvideo";

export default class Projects {
    public static projects : Project[] = [
        new Project("Diesel Engine Supervisory System", "/images/dyna/3.png", 
        "The software monitored a hydraulic dynamometer and various other sensors relating to engine performance.",
        [
            new ProjectImage("/images/dyna/3.png"),
            new ProjectImage("/images/dyna/4.png"),
            new ProjectImage("/images/dyna/5.png"),
            new ProjectImage("/images/dyna/6.png"),
            new ProjectImage("/images/dyna/7.png"),
            new ProjectImage("/images/dyna/8.png"),
            new ProjectImage("/images/dyna/9.png"),
            new ProjectImage("/images/dyna/10.png"),
            new ProjectImage("/images/dyna/11.png"),
            new ProjectImage("/images/dyna/fig3a.png"),
        ],
        "./dynaview.html",null,"640px"
        
        ),
        new Project("Somos Acompañantes Website and Back-end", "/images/somos/1.jpg", 
        "Co-Developed a website for living assistance searching/matching. Used Aurelia for the front-end and Laravel for the back-end.",//<a href='http://somosuy.com'>somosuy.com</a>",
        [
            new ProjectVideo("/video/somos/video-1484280234.mp4", "Somos Acompañantes", "Somos Acompañantes presentation video. Copyright: www.somosuy.com", "http://www.somosuy.com"),
            new ProjectImage("/images/somos/1.jpg"),
            new ProjectImage("/images/somos/2.jpg"),
            new ProjectImage("/images/somos/3.jpg"),
            new ProjectImage("/images/somos/4.jpg"),
            new ProjectImage("/images/somos/5.png"),
            new ProjectImage("/images/somos/6.png"),
            new ProjectImage("/images/somos/7.png"),
            new ProjectImage("/images/somos/8.png"),
            new ProjectImage("/images/somos/9.png"),
            new ProjectImage("/images/somos/10.png"),
        ],
        null,null,"800px"
        ),
        new Project("OpenCL Audio Equalizer", "/images/openclequalizer/main.png", 
        "Audio equalizer using OpenCL implementing twelve 1000 order FIR filters running in real-time in the GPU.",
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
        null,
        "https://github.com/bngreen/OpenCL-Equalizer", "192px"
        ),
    ];
}

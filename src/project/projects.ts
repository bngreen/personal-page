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
import Technologies from './technologies';

export default class Projects {
    private static dyna : Project = new Project("Diesel Engine Supervisory System", "/images/dyna/3.png", 
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
        null,
        null,"640px",
        [
            Technologies.CSharp,
            Technologies.FSharp,
            Technologies.C,
            Technologies.WPF,
            Technologies.NHibernate,
            Technologies.FsLex,
            Technologies.FsYacc,
            Technologies.LPC2378,
        ],
        "The software monitored a hydraulic dynamometer and various other sensors relating to engine performance. After capture, the readings were stored in a database for later export and analysis. In addition to the software, I developed the prototype hardware to interface with the dynamometer and thermometer as a proof of concept. C# was used as the main language for software development, WPF was used for the interface. NHibernate was used for database access and RS232 was used for the hardware communication protocol. In order to generate reports, I wrote a custom parser with F#, FsLex and FsYacc. The report generator supported a wide variety of user-supplied expressions to be used in reports."
        );

    private static somos = new Project("Somos Acompañantes Website and Back-end", "/images/somos/1.jpg", 
        "Co-Developed a website for living assistance searching/matching.",//<a href='http://somosuy.com'>somosuy.com</a>",
        [
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
            new ProjectVideo("/video/somos/video-1484280234.mp4", "Somos Acompañantes", "Somos Acompañantes presentation video. Copyright: www.somosuy.com", "http://www.somosuy.com"),
        ],
        null,null,"800px",
        [
            Technologies.PHP,
            Technologies.Javascript,
            Technologies.Laravel,
            Technologies.Aurelia,
            Technologies.MySQL,
        ], "Co-Developed a website for living assistance searching/matching. Used Aurelia for the front-end and Laravel for the back-end."
        );

    private static ocla = new Project("OpenCL Audio Equalizer", "/images/openclequalizer/main.png", 
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
        "https://github.com/bngreen/OpenCL-Equalizer", "192px",
        [
            Technologies.OpenCL,
            Technologies.CSharp,
        ]
        );
    
    private static aplayer = new Project("Audio Player", "/images/aplayer/1.png", "Audio player developed in C# using WPF for the user interface, featuring a playlist and equalizer.", 
        [
            new ProjectImage("/images/aplayer/1.png"),
            new ProjectImage("/images/aplayer/2.png"),
        ], null, "https://github.com/bngreen/Audio-Player", "473px", [
            Technologies.CSharp,
            Technologies.WPF,
            Technologies.NAudio,
            Technologies.MediaInfo,
        ],"Audio player developed in C# using WPF for the user interface, featuring a playlist and equalizer. The audio equalization is performed by applying the Fast Fourier Transform (FFT) to the audio samples. A user-selected gain is applied to each band, afterwards the inverse FFT is performed. "
        );
    
    private static engraver = new Project("Engraver", "/images/engraver/engp.jpg", "Developed an engraver for prototyping printed circuit boards.", [
        new ProjectImage("/images/engraver/engraver.jpg"),
        new ProjectImage("/images/engraver/host.jpg"),
        new ProjectImage("/images/engraver/pcb.jpg"),
        new ProjectImage("/images/engraver/engp.jpg"),
    ], null, "https://github.com/bngreen/Engraver-Host", "", [
        Technologies.CSharp,
        Technologies.CPP,
        Technologies.WPF,
        Technologies.STM32F103,
        Technologies.Cairo,
    ], 
`###Summary###
Developed an engraver for prototyping printed circuit boards. An UV photosensitive film is applied to the circuit board, then engraver then exposes the parts where the copper must not be removed to an UV laser. Afterwards a solution of sodium carbonate is used to remove the unexposed parts of the photosensitive film, the board is then etched by using ferric chloride. Afterwards, the exposed parts of the photosentitive film is removed by using a solution of sodium hydroxide.
The X and Y movement is performed by two stepper motors which is controlled by a STM32F103 microcontroller. The laser is controlled by the same microcontroller and is driven by pulse width modulation. 
###Firmware###
The firmware of the engraver was developed using C++. Templates are used to build an abstraction layer between the ST Hardware Abstraction Layer (HAL) library and the firmware. The firmware receives commands from a Host computer by an USB port configured as a virtual COM port.
###Host Software###
The host software is responsible for reading the printed circuit board CAD design, converting it to commands and dispatching it to the microcontroller. The software was developed using C# and WPF for the user interface. It supports a subset of the Gerber format which is widely used in PCB design software. After reading the Gerber file, the software rasterizes the design by using the Cairo 2D graphics library. Afterwards the image is converted to commands which is dispatched to the microcontroller.
`
    );

    private static wcet = new Project("WCET Computation Tool","/images/wcet/4.png", "Developed a tool that computes the worst-case execution time of an application running on a specific processor.",
    [
        new ProjectImage("/images/wcet/5.png"),
        new ProjectImage("/images/wcet/1.png"),
        new ProjectImage("/images/wcet/4.png"),
        new ProjectImage("/images/wcet/3.png"),
        new ProjectImage("/images/wcet/2.png"),
    ],null, null, null, [
        Technologies.CSharp,
        Technologies.WPF,
    ],
`Developed a tool that computes the worst-case execution time (WCET) of an application running on the LEON3 SparcV8 microprocessor. The time in clock cycles of every instruction in the application is sampled in the target processor. Afterwards the tool builds a control flow graph (CFG) of the application, the CFG is annotated with the timing information collected during the sampling. A simple graph traversal is used to estimate the WCET of every vertex of the application, considering all possible paths. Alternatively the WCET can be computed by using the Implicit Path Enumeration Technique (IPET). While being faster than the graph traversal, it imposes more complexity to the user of the application, especially when computing the WCET of specific vertices.`
    );

    public static projects : Project[] = [
        Projects.engraver,
        Projects.somos,
        Projects.wcet,
        Projects.ocla,
        Projects.dyna,
        Projects.aplayer,
    ];
}

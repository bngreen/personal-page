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

import pagesection from './pagesection';
import Course from './course';
import Technology from './project/technologies';
import technologies from './project/technologies';
import IContactSink from './contact/icontactsink';
import ZapierSink from './contact/zapiersink';
import IntegromatSink from './contact/integromatsink';
import FirebaseSink from './contact/firebasesink';

export default class PageConfig{
    public static Name = "Bruno Green";
    public static CoverTop = "Hello, my name is " + PageConfig.Name + " and I am";
    public static JobTitle = "Software Developer";
    public static CoverBottom = "creating amazing computer applications";
    public static PageSections : pagesection[] = [
        new pagesection("education", "educationview", "defaultvm", "Education", {courses: [
            new Course("Master of Science in Electrical Engineering", "Pontifical Catholic University of Rio Grande do Sul", "August 2013 – December 2015", "Thesis: Hardware-Based Approach to Support Mixed-Critical Workload Execution in Multi-Core Processors"),
            new Course("Control and Automation Engineering", "Pontifical Catholic University of Rio Grande do Sul", "March 2007 – December 2011", "First in 2011 Class Award")
        ]}),
        new pagesection("skills", "skillsview", "defaultvm", "Skills", {skills : [
            technologies.CSharp,
            technologies.CPP,
            technologies.C,
            technologies.Java,
            technologies.Javascript,
            technologies.Typescript,
            technologies.Scala,
            technologies.WPF,
            technologies.NHibernate,
            technologies.Aurelia,
            technologies.ASPNETMVC,
            technologies.PlayFramework,
            technologies.Moq,
            technologies.NUnit,
            technologies.Xamarin,
            technologies.VHDL,
            technologies.STM32,
            technologies.MSP430,
        ]
        }),
        new pagesection("projects", null, "./projectsvm", "Projects"),
        new pagesection("contact", null, "contactvm", "Contact"),
    ];

    public static firebaseApiKey = "AIzaSyB3XJhWb9egghUPMZEyyKRAvE7MuY9vy-c";
    public static firebaseAuthDomain = "https://contact-db-1eb98.firebaseio.com";
    public static firebaseDatabaseURL = "https://contact-db-1eb98.firebaseio.com";

    public static ContactSinks : IContactSink[] = [
        new FirebaseSink(PageConfig.firebaseApiKey, PageConfig.firebaseAuthDomain, PageConfig.firebaseDatabaseURL, false),
        new ZapierSink("https://hooks.zapier.com/hooks/catch/1997160/m6wryd/"),
        new IntegromatSink("https://hook.integromat.com/q3wraar8xyg0fncanc528d4g6qplzn3q"),
    ];


    public static contactgreeting:string = "Drop me a line, I'd love to hear from you.";
    public static address:string;
    public static phone:string;
    public static github:string="github.com/bngreen";
    public static linkedin:string="www.linkedin.com/in/brunogreen";
    public static twitter:string;
    public static facebook:string;
    public static email:string;
}
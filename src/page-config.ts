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

export default class PageConfig{
    public static Name = "Bruno Green";
    public static CoverTop = "Hello, my name is " + PageConfig.Name + " and I am";
    public static JobTitle = "Software Developer";
    public static CoverBottom = "creating amazing computer applications";
    public static PageSections : pagesection[] = [
        new pagesection("education", "educationview", "defaultvm", "Education", {courses: [
            new Course("Master of Science in Electrical Engineering", "Pontifical Catholic University of Rio Grande do Sul", "August 2013 – December 2015", "Thesis: Hardware-Based Approach to Support Mixed-Critical Workload Execution in Multi-core Processors"),
            new Course("Control and Automation Engineering", "Pontifical Catholic University of Rio Grande do Sul", "March 2007 – December 2011", "First in 2011 Class Award")
        ]}),
        new pagesection("projects", null, "./projectsvm", "Projects"),
    ];
}
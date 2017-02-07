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


import PageConfig from './page-config';
import pagesection from './pagesection';
import '../styles/style.css!';

export class mainpage {
    public pageconfig = PageConfig;
    public sections : pagesection[] = PageConfig.PageSections;
    public coverheight : number;
    private updateCoverHeight(){
        this.coverheight = $(window).height();
    }
    constructor(){
        this.updateCoverHeight();
    }
    attached(){
        $( window ).resize( x=>{
            this.updateCoverHeight();
        });
    }
}
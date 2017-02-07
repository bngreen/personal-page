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

import * as $ from 'jquery';

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
        this.smoothScrollInit();
    }

    private smoothScrollInit() {
        //modified from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
        //var speed = 1;
        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    var offset = target.offset().top + $('.page-host').scrollTop();
                    //var distance = Math.abs(target.offset().top - $('.page-host').scrollTop());
                    if (target.length) {
                        $('.page-host').animate({
                            scrollTop: offset
                        }, 1000);//distance/speed);
                        return true;
                    }
                }
            });
        });
    }

}
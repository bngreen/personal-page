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
import {customElement, inject} from 'aurelia-framework';
import * as $ from 'jquery';
import 'waypoints';

@customElement('navbar')
@inject(Element)
export class navbar {
    public items : pagesection[];
    public title;
    private element;
    public isfixed = false;
    constructor(element:HTMLElement){
        this.title = PageConfig.Name;
        this.items = [
            new pagesection("home", null, null, "Home"),
        ].concat(PageConfig.PageSections);
        this.element = element;
    }

    private deactivateAll(){
        this.items.forEach(x=>x.isactive = false);
    }

    attached(){
        var el = $(this.element.children[1]);
        var wre = $("#widthReferenceElement");
        var width = wre.width();
        var context = document.getElementsByClassName('page-host')[0] as HTMLElement;
        new Waypoint({
            element: this.element.children[0],
            handler: x=>{
                if(x == "down"){
                    el.addClass('fixed');
                    el.css('width', width);
                    this.isfixed = true;
                }
                else{
                    el.removeClass('fixed');
                    this.isfixed = false;
                }
            },
            context: context,
        });
        $( window ).resize( x=>{
            width = wre.width();
            el.css('width', width);
            setTimeout(x=>Waypoint.refreshAll(), 1000);
        });
        this.items.forEach((x, i)=>{
            new Waypoint({
            element: document.getElementById(x.section),
            handler: y=>{
                    if(y == "down"){
                        this.deactivateAll();
                        x.isactive = true;
                    }
                    else if(i > 0) {
                        this.deactivateAll();
                        this.items[i-1].isactive = true;
                    }
                },
                context: context,
                offset: el.height(),
            });
        });
    }

}

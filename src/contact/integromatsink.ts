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

import IContactSink from './icontactsink';
import * as $ from 'jquery';

export default class IntegromatSink implements IContactSink {

    //public corsProxy = "http://cors-anywhere.herokuapp.com/";

    constructor(public webhookurl:string){}

    public send(name: String, email: String, message: String) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            $.ajax({
                url:this.webhookurl,
                data:{name:name, email:email, message:message},
                method: "GET",
            }).done(r=>{
                if(r == "Accepted")
                    resolve(true);
                else
                    resolve(false);
            }).fail(e=>{
                console.log(e);
                reject(e)
            });
        });
    }
}
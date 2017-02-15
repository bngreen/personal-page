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

export class contactvm {
    public pageconfig = PageConfig;
    public name:string="test";
    public email:string="test@test.com";
    public message:string="foo";
    public status:string;
    public isbusy = false;
    send_contact_message(){
        if(this.name == null || this.name == ""){
            this.status = "Please input your name";
            return;
        }
        if(this.email == null || this.email == ""){
            this.status = "Please input your email";
            return;
        }
        if(this.message == null || this.message == ""){
            this.status = "Please input your message";
            return;
        }
        this.status = null;
        this.isbusy = true;
        this.send(0);
    }
    private send(i:number){
        if(i >= PageConfig.ContactSinks.length)
            this.status = "Error sending message";
        else {
            PageConfig.ContactSinks[i].send(this.name, this.email, this.message).then(x=>{
                if(x)
                {
                    this.name = null;
                    this.email = null;
                    this.message = null;
                }
                else
                    this.send(i+1);
            }).catch(r=>this.send(i+1));
        }
        this.isbusy = false;
    }

}

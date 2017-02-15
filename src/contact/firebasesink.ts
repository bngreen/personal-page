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


import * as firebase from 'firebase';
import IContactSink from './icontactsink';

export default class FirebaseSink implements IContactSink{
    public config;
    public messagesRef : firebase.database.Reference;
    constructor(private apiKey:string, private authDomain:string, private databaseURL:string, private resultValue = true){
        this.config = {
            apiKey: apiKey,
            authDomain: authDomain,
            databaseURL: databaseURL,
        };
        try{
            firebase.initializeApp(this.config);
        }catch(ex){}
        this.messagesRef = firebase.database().ref("messages");
        firebase.database().goOffline();
    }
    send(name: String, email: String, message: String) : Promise<boolean>{
        return new Promise((res, rej) => {
            firebase.database().goOnline();
            this.messagesRef.push({
                name:name,
                email:email,
                message:message,
                timestamp:firebase.database.ServerValue.TIMESTAMP
            }).then(x=>firebase.database().goOffline()).then(x=>res(this.resultValue)).catch(r => {
                console.log(r);
                rej(r);
            });
        });
    }

}

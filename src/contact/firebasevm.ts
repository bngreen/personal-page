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
import PageConfig from '../page-config';
import FirebaseCollection from './firebasecollection';

export class firebasevm {
    public user:string;
    public password:string;
    public messages : FirebaseCollection;

    public isloggedin = false;

    constructor(){

    }

    attached(){
        var config = {
            apiKey: PageConfig.firebaseApiKey,
            authDomain: PageConfig.firebaseAuthDomain,
            databaseURL: PageConfig.firebaseDatabaseURL,
        };
        try{
            firebase.initializeApp(config);
        }catch(ex){}
        firebase.auth().onAuthStateChanged(u=>this.isloggedin = u != null);
        firebase.database().goOnline();
        this.messages = new FirebaseCollection("messages", "timestamp", true);
    }

    logoff(){
        firebase.auth().signOut();
        this.messages = null;
    }

    login(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(x=> this.messages = new FirebaseCollection("messages", "timestamp", true));
    }

    deletemessage(message) {
        this.messages.deleteByKey(message.__firebase_key);
    }

}
import Promise from 'bluebird';
import * as Firebase from 'firebase';
import PageConfig from '../page-config';

export default class FirebaseCollection {

  query : Firebase.database.Query = null;
  ref : Firebase.database.Reference;
  items = [];

  constructor(path, orderbychild:string=null, reverse = false) {
    this.ref = Firebase.database().ref(path);
    this.query = this.ref.orderByChild(orderbychild);
    this.query.on("value", snapshot => {
        this.items = [];
        snapshot.forEach((cs : Firebase.database.DataSnapshot )  => {
            var value = cs.val();
            value.__firebase_key = cs.key;
            this.items.push(value);
            return false;
        });
        if(reverse)
            this.items = this.items.reverse();
    });
  }

  public deleteByKey(key: string){
      this.ref.child(key).remove();
  }

  
}
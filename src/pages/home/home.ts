import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: FirebaseListObservable<any[]>;

  newtask={name:""}
   
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.tasks = db.list('/tasks');
  
  }
  crear() {
    this.tasks.push(this.newtask); 
    this.newtask.name="";
  }
  updateTask(key, name) {
    this.tasks.update(key, {name: name});
  }
  removeTask(task) {
    this.tasks.remove(task);
  }
}


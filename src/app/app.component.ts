import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCf0YlWnjfGc_WgEBED3MfOeN2zPGz6k4A",
      authDomain: "ng-recipe-book-5cd34.firebaseapp.com",
    });
  }

  onNavigate(feature : string)
  {
    this.loadedFeature = feature;
  }
}

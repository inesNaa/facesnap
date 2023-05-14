import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../app/models/face-snap.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {

    this.mySnap = new FaceSnap (
     'Blanche Neige',
     'En attendant Charmant....',
     'https://images.unsplash.com/photo-1541554685626-8016b713c293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByaW5jZXNzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap (
     'La bête',
     'Ou est belle ?',
     'https://images.unsplash.com/photo-1612628899093-92248c6f6c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnRlJTIwZGUlMjBmZWUlMjBiZWFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap (
     'Maléfique',
     'Ensorcelée !',
     'https://images.unsplash.com/photo-1575918739118-f6587bd0aaff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvcmNpZXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      new Date(),
      0
    );

  }

}

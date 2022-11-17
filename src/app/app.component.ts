import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archiobald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 6,
        location: 'Bordeaux',
      },
      {
        title: 'Toto',
        description: 'Le méchant !',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 3,
        location: 'Paris',
      },
      {
        title: "Coco l'asticot",
        description: 'Mon meilleur ennemi depuis tout petit !',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 9,
      },
    ];
  }
}

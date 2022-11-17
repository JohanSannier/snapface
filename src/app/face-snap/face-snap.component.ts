import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  hasSnapped!: boolean;

  ngOnInit() {
    this.hasSnapped = false;
  }

  onSnap() {
    if (this.hasSnapped === false) {
      this.faceSnap.snaps++;
      this.hasSnapped = true;
    } else {
      this.faceSnap.snaps--;
      this.hasSnapped = false;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  hasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit() {
    this.hasSnapped = false;
  }

  onSnap() {
    if (this.hasSnapped === false) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.hasSnapped = true;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.hasSnapped = false;
    }
  }
}

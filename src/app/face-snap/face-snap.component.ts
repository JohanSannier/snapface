import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private faceSnapService: FaceSnapService,
    private route: Router
  ) {}

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

  onViewFaceSnap() {
    this.route.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FirebaseRecord } from '../../model/firebase-record';

@Component({
  selector: 'app-add-gallery-img',
  templateUrl: './add-gallery-img.component.html',
  styleUrls: ['./add-gallery-img.component.css']
})
export class AddGalleryImgComponent implements OnInit {

  @Input() private record: FirebaseRecord;
  @Input() private isMainImage: boolean;

  constructor() { }

  ngOnInit() {
  }

}

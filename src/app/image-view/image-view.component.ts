import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { GalleryService } from '../service/gallery.service';
import { FileRecordDB } from '../model/file-recordDB';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  @Input() private imgRec: FileRecordDB;

  constructor(public dao: GalleryService) { }

  ngOnInit() {
  }

  removeImage() {
    this.dao.deleteGalleryRecord(this.imgRec);
  }

}

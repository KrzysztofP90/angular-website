import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDaoService} from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery-cms',
  templateUrl: './gallery-cms.component.html',
  styleUrls: ['./gallery-cms.component.css']
})
export class GalleryCmsComponent implements OnInit {

  @Input() record: FirebaseRecord;

  private images: Array<any>;

  constructor(public daoGallery: GalleryService, public dao: FirebaseDaoService) { }

  ngOnInit() {
    this.daoGallery.getGalleryImagesFromGallery().subscribe(img => {
    this.images = img;
    });
  }

  updateRecord() {
    this.dao.updateRecordInFirebase(this.record);
  }

}

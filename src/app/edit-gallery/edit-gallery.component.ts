import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {

images: Array<any>;

  constructor(public dao: GalleryService) { }

  ngOnInit() {
    this.dao.getGalleryImagesFromGallery().subscribe(img => {
    this.images = img;
    });
  }

  uploadNewImage() {

  }

}

import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private images: Array<any>;
  private lastSlideId: number;

  constructor(public dao: GalleryService) { }

  ngOnInit() {
    this.dao.getGalleryImagesFromGallery().subscribe(img => {
      this.images = img;
      this.lastSlideId = this.images.length - 1;
    });
  }

}

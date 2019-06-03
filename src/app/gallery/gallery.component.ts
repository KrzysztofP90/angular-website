import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private images: Array<any>;
  private lastSlideId: number;

  constructor(private dao: GalleryService) { }

  ngOnInit() {
    this.dao.getGalleryImagesFromGallery().subscribe(img => {
      this.images = img;
      this.lastSlideId = this.images.length - 1;
    });
  }

}

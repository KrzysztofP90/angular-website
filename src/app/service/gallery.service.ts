import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private dao: AngularFirestore ) {
    this.loadImagesFromFirebase();
   }

  private imagesFromGallery: Observable<any[]>;

  loadImagesFromFirebase() {
    this.imagesFromGallery = this.dao.collection('gallery-img').valueChanges();
  }

  getGalleryImagesFromGallery() {
    return this.imagesFromGallery;
  }
}

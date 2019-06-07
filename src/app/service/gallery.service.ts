import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FileRecordDB } from '../model/file-recordDB';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private imagesFromGallery: Observable<FileRecordDB[]>;
  private galleryCollection: AngularFirestoreCollection<FileRecordDB>;
  private galleryDocument: AngularFirestoreDocument<FileRecordDB>;

  constructor(private dao: AngularFirestore ) {
    // this.loadImagesFromFirebase();
    this.galleryCollection = dao.collection('gallery-img');
      this.imagesFromGallery = this.galleryCollection.snapshotChanges()
      .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as FileRecordDB;
          data.idKey = a.payload.doc.id;
          console.log("KEY ID:" + data.idKey);
          return data;
        });
      }));
   }

  // loadImagesFromFirebase() {
  //   this.imagesFromGallery = this.dao.collection('gallery-img').valueChanges();
  // }

  getGalleryImagesFromGallery() {
    return this.imagesFromGallery;
  }

  addGalleryRecordToFirebase(galleryRecord: FileRecordDB) {
    this.galleryCollection.add(galleryRecord);
    alert("Record added!");
    console.log("Added!")
  }

  deleteGalleryRecord(galleryRecord: FileRecordDB) {
    this.galleryDocument = this.dao.doc('gallery-img/' + galleryRecord.idKey);
    this.galleryDocument.delete();
    alert("Image removed!");
  }
}

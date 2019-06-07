import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FileRecordDB } from '../model/file-recordDB';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private imagesFromGallery: Observable<FileRecordDB[]>;
  private galleryCollection: AngularFirestoreCollection<FileRecordDB>;
  private galleryDocument: AngularFirestoreDocument<FileRecordDB>;

  constructor(private dao: AngularFirestore ) {
    this.galleryCollection = dao.collection('gallery-img');
    this.imagesFromGallery = this.loadImagesWithIdKeyFromGallery();
   }

   loadImagesWithIdKeyFromGallery() {
    return this.galleryCollection.snapshotChanges()
    .pipe(
    map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as FileRecordDB;
        data.idKey = a.payload.doc.id;
        return data;
      });
    }));
   }

  getGalleryImagesFromGallery() {
    return this.imagesFromGallery;
  }

  addGalleryRecordToFirebase(galleryRecord: FileRecordDB) {
    this.galleryCollection.add(galleryRecord);
    alert('Record added!');
  }

  deleteGalleryRecord(galleryRecord: FileRecordDB) {
    this.removeImageFromFirestorage(galleryRecord);
    this.galleryDocument = this.dao.doc('gallery-img/' + galleryRecord.idKey);
    this.galleryDocument.delete();
    alert('Image removed!');
  }

  private removeImageFromFirestorage(galleryRecord: FileRecordDB) {
    const storageRef = firebase.storage().ref().child(galleryRecord.dbLocalization);
    storageRef.delete().then( () => {
    }).catch( (error) => {
      console.log('Image not removed!: ' + error);
    });
  }
}

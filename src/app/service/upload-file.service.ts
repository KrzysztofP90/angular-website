import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { FileToUpload } from '../model/fileToUpload';
import { FileRecordDB } from '../model/file-recordDB';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { GalleryService } from '../service/gallery.service';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private pathToImage: string = '/gallery';
  uploads: AngularFireList<FileRecordDB[]>;

  private recordToSave: FileRecordDB = {
    name: "",
    url: ""
  };


  constructor( private db: AngularFireDatabase,
    private dao: GalleryService) { }

  pushUpload(upload: FileToUpload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.pathToImage}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          this.recordToSave.url = url;
          this.saveNewRecordInGallery(this.recordToSave);
        });
      }
    );
  }

  saveNewRecordInGallery(upload: FileRecordDB) {
    this.dao.addGalleryRecordToFirebase(upload);
  }
}

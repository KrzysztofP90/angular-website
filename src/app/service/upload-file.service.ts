import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { FileToUpload } from '../model/fileToUpload';
import { FileRecordDB } from '../model/file-recordDB';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { GalleryService } from '../service/gallery.service';
import { FirebaseRecord } from '../model/firebase-record';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private pathToImage: string = '/gallery';
  uploads: AngularFireList<FileRecordDB[]>;

  private recordToSave: FileRecordDB = {
    name: "",
    url: "",
    dbLocalization: ""
  };


  constructor( private db: AngularFireDatabase, private dao: GalleryService,
    private recordDao: FirebaseDaoService) { }

  pushUpload(upload: FileToUpload, record: FirebaseRecord = null, isMainImage?: boolean) {
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
        this.recordToSave.dbLocalization = uploadTask.snapshot.ref.fullPath;
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          this.recordToSave.url = url;
          this.saveNewRecordInGallery(this.recordToSave, record, isMainImage);
        });
      }
    );
  }

  saveNewRecordInGallery(upload: FileRecordDB, record: FirebaseRecord, isMainImage?: boolean) {
    if (record === null) {
      this.dao.addGalleryRecordToFirebase(upload);
    }
    else {
      this.dao.addRecordImageToFirebase(upload);
      if (isMainImage) {
        record.mainImagePath = upload.url;
      } else {
        record.miniImagePath = upload.url;
      }
      this.recordDao.updateRecordInFirebase(record);
    }
  }
}

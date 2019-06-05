import { Injectable } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseRecord } from '../model/firebase-record';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class FirebaseDaoService {

  private recordsObservable: Observable<FirebaseRecord[]>;
  private recordCollection: AngularFirestoreCollection<RecordFromDB>;
  private recordDocument: AngularFirestoreDocument<RecordFromDB>;

  private firebaseRecords: Array<FirebaseRecord>;
    /// example object to save
    toSave: FirebaseRecord = {
      buttonLabel: "new button",
      description: "new describe",
      mainContent: "new main content",
      path: "option",
      title: "New Record",
      miniImagePath: "",
      mainImagePath: ""
    };

  constructor(private dao: AngularFirestore) {
      this.dao.collection('records').valueChanges().subscribe(rec => {
        this.firebaseRecords = rec;
      });

      // this.recordsObservable = this.dao.collection('records').valueChanges();
      this.recordCollection = dao.collection('records');
      this.recordsObservable = this.dao.collection('records').snapshotChanges()
      .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as FirebaseRecord;
          data.idKey = a.payload.doc.id;
          return data;
        });
      }));
  }

  getRecordsObservable() {
    return this.recordsObservable;
  }

  updateRecordInFirebase(record: Object, recordId: string) {
    console.log("Update !!!");
    this.recordDocument = this.dao.doc('records/' + recordId);
    this.recordDocument.update(record);
  }

  getFirebaseRecords() {
    return this.firebaseRecords;
  }

}

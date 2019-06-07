import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseRecord } from '../model/firebase-record';
import { FileRecordDB } from '../model/file-recordDB';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class FirebaseDaoService {

  private recordsObservable: Observable<FirebaseRecord[]>;
  private recordCollection: AngularFirestoreCollection<FirebaseRecord>;
  private recordDocument: AngularFirestoreDocument<FirebaseRecord>;
  private firebaseRecords: Array<FirebaseRecord>;
  private newIdForRecord: number;
  private newPath: string;

  constructor(private dao: AngularFirestore) {
      this.dao.collection('records').valueChanges().subscribe(rec => {
        this.firebaseRecords = rec;
        this.setIdForNewRecord(rec);
        this.setPathForNewRecord();
      });
      this.recordCollection = dao.collection('records');
      this.recordsObservable = this.recordCollection.snapshotChanges()
      .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as FirebaseRecord;
          data.idKey = a.payload.doc.id;
          return data;
        });
      }));
  }

  setIdForNewRecord(record) {
    this.newIdForRecord = record.length - 2;
  }

  setPathForNewRecord() {
    this.newPath = "option/" + this.newIdForRecord;
  }

  getRecordsObservable() {
    return this.recordsObservable;
  }

  addRecordToFirebase(recordToAdd: FirebaseRecord) {
    recordToAdd.id = this.newIdForRecord;
    recordToAdd.path = this.newPath;
    this.recordCollection.add(recordToAdd);
    alert("Record added!");
    console.log("Added!")
  }

  updateRecordInFirebase(updatedRecord: FirebaseRecord) {
    this.recordDocument = this.dao.doc('records/' + updatedRecord.idKey);
    this.recordDocument.update(updatedRecord);
    alert("Record edited!");
  }

  getFirebaseRecords() {
    return this.firebaseRecords;
  }

  deleteRecord(recordToDelete: FirebaseRecord) {
    this.recordDocument = this.dao.doc('records/' + recordToDelete.idKey);
    this.recordDocument.delete();
    alert("Record removed!");
  }



}

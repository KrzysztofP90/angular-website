import { Injectable } from '@angular/core';
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
  private recordCollection: AngularFirestoreCollection<FirebaseRecord>;
  private recordDocument: AngularFirestoreDocument<FirebaseRecord>;
  private firebaseRecords: Array<FirebaseRecord>;
  private newIdForRecord: number;


  constructor(private dao: AngularFirestore) {
      this.dao.collection('records').valueChanges().subscribe(rec => {
        this.firebaseRecords = rec;
        this.setIdForNewRecord(rec);
    
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



  getRecordsObservable() {
    return this.recordsObservable;
  }

  addRecordToFirebase(recordToAdd: FirebaseRecord) {
    recordToAdd.id = this.newIdForRecord;
    this.recordCollection.add(recordToAdd);
    alert("Record added!");
    console.log("Added!")
  }

  updateRecordInFirebase(updatedRecord: FirebaseRecord, record: FirebaseRecord) {
    this.recordDocument = this.dao.doc('records/' + record.idKey);
    this.recordDocument.update(updatedRecord);
  }

  getFirebaseRecords() {
    return this.firebaseRecords;
  }

}

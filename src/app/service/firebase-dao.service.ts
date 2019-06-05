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

  constructor(private dao: AngularFirestore) {
      this.dao.collection('records').valueChanges().subscribe(rec => {
        this.firebaseRecords = rec;
      });
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
    this.recordDocument = this.dao.doc('records/' + recordId);
    this.recordDocument.update(record);
  }

  getFirebaseRecords() {
    return this.firebaseRecords;
  }

}

import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseRecord } from '../model/firebase-record';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FirebaseDaoService {

  private recordsObservable: Observable<FirebaseRecord[]>;

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
      // this.recordsObservable = this.dao.collection('records').valueChanges();
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

}

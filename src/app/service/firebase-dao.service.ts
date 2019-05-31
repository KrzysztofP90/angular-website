import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseRecord } from '../model/firebase-record';

@Injectable({
  providedIn: 'root'
})

export class FirebaseDaoService {

  private records: Observable<FirebaseRecord[]>;

  constructor(private dao: AngularFirestore) {
      this.records = this.dao.collection('records').valueChanges();
  }

  getRecords() {
    return this.records;
  }
}

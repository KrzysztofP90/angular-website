import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseRecord } from '../model/firebase-record';


@Injectable({
  providedIn: 'root'
})

export class FirebaseDaoService {

  private recordsObservable: Observable<FirebaseRecord[]>;

  constructor(private dao: AngularFirestore) {
      this.recordsObservable = this.dao.collection('records').valueChanges();
  }

  getRecordsObservable() {
    return this.recordsObservable;
  }
}

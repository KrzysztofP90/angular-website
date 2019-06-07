import { Injectable } from '@angular/core';
import { FirebaseRecord } from '../model/firebase-record';


@Injectable({
  providedIn: 'root'
})

export class PrepareDataHelperService {

  private records: Array<FirebaseRecord>;

  constructor() {}

  sortFireBaseArray(array: FirebaseRecord[]) {
    array.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  getRecordsFromFirebase() {
    return this.records;
  }

  fixNewLineSignsFromFirebaseInRecordArray(array: FirebaseRecord[]) {
    for (const rec of array) {
      rec.description = this.fixAndConvertNewLineSignsFromFireBase(rec.description);
      rec.mainContent = this.fixAndConvertNewLineSignsFromFireBase(rec.mainContent);
    }
    return array;
  }

  fixAndConvertNewLineSignsFromFireBase(text: string) {
    if (text != null) {
      return text.split('\\n').join('\n');
    }
  }

}

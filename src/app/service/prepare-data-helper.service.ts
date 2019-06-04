import { Injectable } from '@angular/core';
import { FirebaseRecord } from '../model/firebase-record';
import { RecordFromDB } from '../model/record';


@Injectable({
  providedIn: 'root'
})

export class PrepareDataHelperService {

  private records: Array<RecordFromDB>;

  constructor() {}

  createUsefulRecordsArrayFromFirebaseRecordsArray(fbRecords: FirebaseRecord[]) {
    const arrayOfRecords = new Array<RecordFromDB>();
    let id = 0;
    const galleryOrContactId = 99;
    for (const rec of fbRecords) {
      if (rec.path !== 'gallery' && rec.path !== 'contact') {
        arrayOfRecords.push(new RecordFromDB(rec.idKey, rec.title,
          this.fixAndConvertNewLineSignsFromFireBase(rec.description),
          rec.path + id.toString(), rec.buttonLabel,
          this.fixAndConvertNewLineSignsFromFireBase(rec.mainContent),
          rec.miniImagePath, rec.mainImagePath, id));
        id++;
      }
    }
    for (const rec of fbRecords) {
      if (rec.path === 'gallery' || rec.path === 'contact') {
        arrayOfRecords.push(new RecordFromDB(rec.idKey, rec.title,
          this.fixAndConvertNewLineSignsFromFireBase(rec.description), rec.path,
          rec.buttonLabel, this.fixAndConvertNewLineSignsFromFireBase(rec.mainContent),
          rec.miniImagePath, rec.mainImagePath, galleryOrContactId));
        id++;
      }
    }
    this.records = arrayOfRecords;
  }

  getRecordsFromFirebase() {
    return this.records;
  }

  fixAndConvertNewLineSignsFromFireBase(text: string) {
    return text.split('\\n').join('\n');
  }
}

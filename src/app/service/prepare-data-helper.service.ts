import { Injectable } from '@angular/core';
import { FirebaseRecord } from '../model/firebase-record';
import { RecordFromDB } from '../model/record';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PrepareDataHelperService {

  private recordsFromDB: Array<RecordFromDB>;
  private records: Array<FirebaseRecord>;
  private contactRecord: RecordFromDB;

  constructor() {}

  // createUsefulRecordsArrayFromFirebaseRecordsArray(fbRecords: FirebaseRecord[]) {
  //   const arrayOfRecords = new Array<RecordFromDB>();
  //   let id = 0;
  //   let currentId = 0;
  //   for (const rec of fbRecords) {
  //     if (rec.path !== 'gallery' && rec.path !== 'contact') {
  //       currentId = id;
  //     } else {
  //       currentId = 99;
  //     }
  //     const record = new RecordFromDB(rec.idKey, rec.title,
  //     this.fixAndConvertNewLineSignsFromFireBase(rec.description),
  //     rec.path, rec.buttonLabel,
  //     this.fixAndConvertNewLineSignsFromFireBase(rec.mainContent),
  //     rec.miniImagePath, rec.mainImagePath, currentId);
  //     arrayOfRecords.push(record);
  //     if (record.getPath() === 'contact') {
  //       this.contactRecord = record;
  //     }
  //     id++;
  //   }
  //   this.records = arrayOfRecords;
  // }

  convertFireBaseRecordToRecordFromDB(records: FirebaseRecord[]) {
    let recordsFromDBArray = new Array<RecordFromDB>();
    for (const rec of records) {
      let recordToAdd = new RecordFromDB(rec.idKey, rec.title, rec.description, rec.path,
        rec.buttonLabel, rec.mainContent, rec.miniImagePath, rec.mainImagePath, rec.id);
        recordsFromDBArray.push(recordToAdd);
    }
    this.recordsFromDB = recordsFromDBArray;
  }

  sortFireBaseArray(array: FirebaseRecord[]) {
    array.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  getRecordsFromFirebase() {
    return this.records;
  }

  getRecordTemplate() {
    return this.recordsFromDB;
  }

  getContactRecord() {
    return this.contactRecord;
  }

  fixAndConvertNewLineSignsFromFireBase(text: string) {
    return text.split('\\n').join('\n');
  }

  getFirebaseRecords(records: Observable<FirebaseRecord[]>) {
    records.subscribe( rec => {
      this.records = rec;
      this.convertFireBaseRecordToRecordFromDB(rec);
    });
  }
}

import { Injectable } from '@angular/core';
import { FirebaseRecord } from '../model/firebase-record';
import { RecordFromDB } from '../model/record';


@Injectable({
  providedIn: 'root'
})

export class PrepareDataHelperService {

  // temporary data for image
  arrayOfMiniImagePath: Array<string> = [
    'assets/builder.jpg', 'assets/builder3.jpg', 'assets/builder7.jpg',
    'assets/minicontact.jpg', 'assets/cat-4151445_960_720.jpg'
  ];
  // temporary data for image
  arrayOfImagePath: Array<string> = [
    'assets/builder2.jpg', 'assets/builder4.jpg',
    'assets/builder5.jpg', 'assets/roof.jpeg'
  ];

  private records: Array<RecordFromDB>;

  constructor() {}
  
  createUsefulRecordsArrayFromFirebaseRecordsArray(fbRecords: FirebaseRecord[]) {
    const arrayOfRecords = new Array<RecordFromDB>();
    let id = 0;
    const galleryOrContactId = 99;
    for (const rec of fbRecords) {
      if (rec.path !== 'gallery' && rec.path !== 'contact') {
        arrayOfRecords.push(new RecordFromDB(rec.title, rec.description,
          rec.path + id.toString(), rec.buttonLabel, rec.mainContent,
          this.arrayOfMiniImagePath[id], this.arrayOfImagePath[id], id));
        id++;
      }
    }
    for (const rec of fbRecords) {
      if (rec.path === 'gallery' || rec.path === 'contact') {
        arrayOfRecords.push(new RecordFromDB(rec.title,
          rec.description, rec.path, rec.buttonLabel, rec.mainContent,
           this.arrayOfMiniImagePath[id], this.arrayOfImagePath[id], galleryOrContactId));
        id++;
      }
    }
    this.records = arrayOfRecords;
  }

  getRecordsFromFirebase() {
    return this.records;
  }
}

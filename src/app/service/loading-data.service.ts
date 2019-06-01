import { Injectable } from '@angular/core';
import { FakeRecordsGenerator } from '../model/generator';
import { RecordFromDB } from '../model/record';

@Injectable({
  providedIn: 'root'
})
export class LoadingFakeDataService {

  private generator: FakeRecordsGenerator;
  private recordsArray: Array<RecordFromDB>;
  private gallery: RecordFromDB;
  private contact: RecordFromDB;


  constructor() { 
    this.generator = new FakeRecordsGenerator();
    this.recordsArray = this.generator.createExampleRecordsArray();
    this.gallery = this.generator.createExampleGalleryRecord();
    this.contact = this.generator.createExampleContactRecord();
  }

  getFakeRecordsArray(): Array<RecordFromDB> {
    return this.recordsArray;
  }

  getGallery() {
    return this.gallery;
  }

  getContact() {
    return this.contact;
  }

  getFakeRecordByPath(path: string): RecordFromDB {
    for (const rec of this.recordsArray) {
        const recordPath = rec.getPath();
        if (recordPath === path) {
            return rec;
        }
    }
  }
}


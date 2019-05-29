import { Injectable } from '@angular/core';
import { FakeRecordsGenerator } from '../model/generator';
import { RecordFromDB } from '../model/record';

@Injectable({
  providedIn: 'root'
})
export class LoadingDataService {

  private generator: FakeRecordsGenerator;
  private fakeRecordsArray: Array<RecordFromDB>;

  constructor() { 
    this.generator = new FakeRecordsGenerator();
    this.fakeRecordsArray = this.generator.createExampleRecordsArray();
  }

  getFakeRecordsArray(): Array<RecordFromDB> {
    return this.fakeRecordsArray;
  }
}


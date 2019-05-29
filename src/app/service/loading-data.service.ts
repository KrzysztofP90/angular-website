import { Injectable } from '@angular/core';
import { FakeRecordsGenerator } from '../model/generator';
import { RecordFromDB } from '../model/record';

@Injectable({
  providedIn: 'root'
})
export class LoadingDataService {

  private generator: FakeRecordsGenerator;

  constructor() { 
    this.generator = new FakeRecordsGenerator();
  }

  getFakeRecordsArray(): Array<RecordFromDB> {
    return this.generator.createExampleRecordsArray();
  }
}


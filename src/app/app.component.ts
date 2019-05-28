import { Component } from '@angular/core';
import { RecordFromDB } from '../app/model/record';
import { FakeRecordsGenerator } from '../app/model/generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private records: Array<RecordFromDB>;
  private generator: FakeRecordsGenerator;


  constructor() {
    /// generate fake example records not from DB
    this.generator = new FakeRecordsGenerator();
    this.records = this.generator.createExampleRecordsArray();
  }

  getRecords() {
    return this.records;
  }
}



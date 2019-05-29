import { Component } from '@angular/core';
import { RecordFromDB } from '../app/model/record';
import { LoadingDataService } from '../app/service/loading-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadingDataService]
})
export class AppComponent {

  private records: Array<RecordFromDB>;
  constructor(private dataService: LoadingDataService) {
    /// generate fake example records not from DB
    this.records = this.dataService.getFakeRecordsArray();
  }

  getRecords() {
    return this.records;
  }
}



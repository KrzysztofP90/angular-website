import { Component } from '@angular/core';
import { RecordFromDB } from '../app/model/record';
import { LoadingDataService } from '../app/service/loading-data.service';
import { FirebaseDaoService } from './service/firebase-dao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadingDataService,
    FirebaseDaoService]

})
export class AppComponent {

  private records: Array<RecordFromDB>;
  
  constructor(private dataService: LoadingDataService, private dao: FirebaseDaoService) {
    /// generate fake example records not from DB
    this.records = this.dataService.getFakeRecordsArray();
  }

  getRecords() {
    return this.records;
  }

  onActivate(event) {
    window.scroll(0,0);
  }
}



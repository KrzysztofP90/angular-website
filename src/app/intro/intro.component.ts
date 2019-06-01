import { Component, OnInit } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { LoadingFakeDataService } from '../service/loading-data.service';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  private records: Array<RecordFromDB>;
  private gallery: RecordFromDB;
  private contact: RecordFromDB;
  private recordsObserv: Observable<FirebaseRecord[]>;

  constructor(private dataService: LoadingFakeDataService, private dao: FirebaseDaoService,
     private helper: PrepareDataHelperService) {}

  ngOnInit() {
    this.recordsObserv = this.dao.getRecordsObservable();
    this.recordsObserv.subscribe(records => {
      this.records = this.helper.convertFirebaseRecordsArrayToUsefulRecordsArray(records);
    });
    /// gallery and contact temporary 
    this.contact = this.dataService.getContact();
    this.gallery = this.dataService.getGallery();
  }
}

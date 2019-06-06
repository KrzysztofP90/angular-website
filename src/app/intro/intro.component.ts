import { Component, OnInit } from '@angular/core';
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

  private records: Array<FirebaseRecord>;
  private recordsObserv: Observable<FirebaseRecord[]>;

  constructor(public dao: FirebaseDaoService, public helper: PrepareDataHelperService) {}

  ngOnInit() {
    this.recordsObserv = this.dao.getRecordsObservable();
    this.recordsObserv.subscribe( rec => {
      this.helper.sortFireBaseArray(rec);
      this.records = rec;
      this.records = this.helper.fixNewLineSignsFromFirebaseInRecordArray(this.records);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';
import { RecordFromDB } from '../model/record';
import { DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';


@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {

  private records: Array<RecordFromDB>;

  constructor(public dao: FirebaseDaoService, public helper: PrepareDataHelperService) { }

  ngOnInit() {
    this.dao.getRecordsObservable().subscribe( rec => {
      this.helper.createUsefulRecordsArrayFromFirebaseRecordsArray(rec);
      this.records = this.helper.getRecordsFromFirebase();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';
import { FirebaseRecord } from '../model/firebase-record';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {

  private records: Array<FirebaseRecord>;

  constructor(public dao: FirebaseDaoService, public helper: PrepareDataHelperService,
    private auth: AuthService ) { }

  ngOnInit() {
    this.dao.getRecordsObservable().subscribe( rec => {
    this.helper.sortFireBaseArray(rec);
    this.records = rec;
    });
  }

  logOut() {
    this.auth.logout();
  }

}

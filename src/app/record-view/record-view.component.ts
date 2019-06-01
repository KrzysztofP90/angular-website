import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordFromDB } from '../model/record';
import { LoadingFakeDataService } from '../service/loading-data.service';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnInit {

  private records: Array<RecordFromDB>;
  private currentId: number;
  private recordsObserv: Observable<FirebaseRecord[]>;

  constructor(private router: Router, public dataService: LoadingFakeDataService, 
    private activatedRoute: ActivatedRoute, public dao: FirebaseDaoService,
    public helper: PrepareDataHelperService ) {}

  ngOnInit() {
    this.records = this.helper.getRecordsFromFirebase();
    this.activatedRoute.params.subscribe(routeParams => {
      this.setCurrentId(routeParams.id);
    });
  }

  setCurrentId(id: number) {
    this.currentId = id;
  }
}

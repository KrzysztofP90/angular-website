import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  // private records: Array<RecordFromDB>;
  private records: Array<FirebaseRecord>;
  private currentId: number;
  private recordsObserv: Observable<FirebaseRecord[]>;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute, public dao: FirebaseDaoService,
    public helper: PrepareDataHelperService ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
    this.setCurrentId(routeParams.id);
    this.records = this.dao.getFirebaseRecords();
    this.helper.sortFireBaseArray(this.records);
    });
  }

  

  setCurrentId(id: number) {
    this.currentId = id;
  }
}

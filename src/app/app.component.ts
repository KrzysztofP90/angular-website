import { Component, OnInit } from '@angular/core';
import { RecordFromDB } from '../app/model/record';
import { LoadingFakeDataService } from '../app/service/loading-data.service';
import { FirebaseDaoService } from './service/firebase-dao.service';
import { FirebaseRecord } from './model/firebase-record';
import { Observable } from 'rxjs';
import { PrepareDataHelperService } from './service/prepare-data-helper.service';
import { GalleryService } from './service/gallery.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LoadingFakeDataService,
    FirebaseDaoService,
    PrepareDataHelperService,
    GalleryService
  ],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent implements OnInit {

  // private records: Array<RecordFromDB>;
  private records: Array<FirebaseRecord>;
  private recordsObserv: Observable<FirebaseRecord[]>;

  constructor(public dao: FirebaseDaoService, public helper: PrepareDataHelperService) {}

  ngOnInit() {
    this.recordsObserv = this.dao.getRecordsObservable();
    this.recordsObserv.subscribe(records => {
      // this.helper.createUsefulRecordsArrayFromFirebaseRecordsArray(records);
      // this.records = this.helper.getRecordsFromFirebase();
      this.helper.sortFireBaseArray(records);
      this.records = records;
    });
  }

  onActivate(event) {
    window.scroll(0,400);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
}



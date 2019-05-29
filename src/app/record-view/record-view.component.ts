import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordFromDB } from '../model/record';
import { LoadingDataService} from '../service/loading-data.service';


@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnInit {

  private records: Array<RecordFromDB>;
  private currentId: number;

  constructor(private router: Router, private dataService: LoadingDataService, 
    private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.records = this.dataService.getFakeRecordsArray();
    this.activatedRoute.params.subscribe(routeParams => {
      this.setCurrentId(routeParams.id);
    });
  }

  setCurrentId(id: number) {
    this.currentId = id;
  }
}

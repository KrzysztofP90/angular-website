import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordFromDB } from '../model/record';
import { LoadingDataService} from '../service/loading-data.service';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnInit {

  private path: string;
  private recordData: RecordFromDB;

  constructor(private router: Router, private dataService: LoadingDataService ) {}

  ngOnInit() {
    this.path = this.router.url;
    this.recordData = this.dataService.getFakeRecordByPath(this.path);
  }
}

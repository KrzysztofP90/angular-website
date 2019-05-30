import { Component, OnInit, Input } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { LoadingDataService } from '../service/loading-data.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  private records: Array<RecordFromDB>;
  private gallery: RecordFromDB;
  private contact: RecordFromDB;
  
  constructor(private dataService: LoadingDataService) { 
    this.records = this.dataService.getFakeRecordsArray();
    this.contact = this.dataService.getContact();
    this.gallery = this.dataService.getGallery();
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { LoadingDataService } from '../service/loading-data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact: RecordFromDB;

  constructor(private dataService: LoadingDataService) {}

  ngOnInit() {
    this.contact = this.dataService.getContact();
  }

}

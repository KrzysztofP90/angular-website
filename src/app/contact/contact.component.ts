import { Component, OnInit } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { LoadingFakeDataService } from '../service/loading-data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact: RecordFromDB;

  constructor(private dataService: LoadingFakeDataService) {}

  ngOnInit() {
    this.contact = this.dataService.getContact();
  }

}

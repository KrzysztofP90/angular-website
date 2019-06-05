import { Component, OnInit } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';
import { FirebaseDaoService } from '../service/firebase-dao.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact: RecordFromDB;

  constructor(public dao: FirebaseDaoService, public helper: PrepareDataHelperService) {}

  ngOnInit() {
    this.contact = this.helper.getContactRecord();
  }

}

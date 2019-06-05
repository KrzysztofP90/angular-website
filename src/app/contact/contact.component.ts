import { Component, OnInit } from '@angular/core';
import { PrepareDataHelperService } from '../service/prepare-data-helper.service';
import { FirebaseDaoService } from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact: FirebaseRecord;
  private records: FirebaseRecord[];

  constructor(public dao: FirebaseDaoService, public helper: PrepareDataHelperService) {}

  ngOnInit() {
    this.records = this.dao.getFirebaseRecords();
    this.helper.sortFireBaseArray(this.records);
    this.records = this.helper.fixNewLineSignsFromFirebaseInRecordArray(this.records);
    const contactId = this.getContactRecordId(this.records);
    this.contact = this.records[contactId];
  }

  getContactRecordId(arr: FirebaseRecord[]) {
    return this.records.length - 1;
  }

}

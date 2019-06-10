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

  private email: any = {
    email: '',
    message: ''
  };

  private quest: string;

  private JsonToSend: any = {
      senderEmail: "",
      emailPassword: "",
      consumerEmail: "",
      smtpPort: 587,
      portForSocket: 587,
      host: 'smtp.gmail.com',
      messageText: ""
  };



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

  createMessageToClientFromMessage() {
    const message = this.email.message + '\n Your message from client - please answer to '
    + this.email.email;
    this.email.message = message;
  }

  createJSONtoSend() {
    this.JsonToSend.message = this.email.message;
    /// temporary
    this.JsonToSend.consumerEmail = 'krzysztof1.przybylowicz@gmail.com';
  }

  sendEmail() {
    this.createMessageToClientFromMessage();
    this.createJSONtoSend();
    console.log(this.JsonToSend);
  }

}

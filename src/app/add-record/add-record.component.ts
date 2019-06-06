import { Component, OnInit } from '@angular/core';
import { FirebaseDaoService} from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  private idForNewRecord: number;
  records: FirebaseRecord[];
  private recordToAdd: FirebaseRecord = {
    idKey: "",
    description: "",
    mainImagePath: "",
    miniImagePath: "",
    buttonLabel: "",
    mainContent: "",
    path: "option/",
    title: "",
    id: 0,
  };

  private newId: number;

  constructor(public dao: FirebaseDaoService) { }

  ngOnInit() {
  }

  addRecord() {
    this.dao.addRecordToFirebase(this.recordToAdd);
  }

}

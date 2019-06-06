import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDaoService} from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';

@Component({
  selector: 'app-cms-record',
  templateUrl: './cms-record.component.html',
  styleUrls: ['./cms-record.component.css']
})
export class CmsRecordComponent implements OnInit {

  @Input() private record: FirebaseRecord;

  constructor(public dao: FirebaseDaoService) { }

  ngOnInit() {
  }

  updateRecord() {
    this.dao.updateRecordInFirebase(this.record);
    alert("Record edited!");
  }

}

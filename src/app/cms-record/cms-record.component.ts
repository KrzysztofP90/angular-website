import { Component, OnInit, Input } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { FirebaseDaoService} from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';

@Component({
  selector: 'app-cms-record',
  templateUrl: './cms-record.component.html',
  styleUrls: ['./cms-record.component.css']
})
export class CmsRecordComponent implements OnInit {

  // @Input() private record: RecordFromDB;
  @Input() private record: FirebaseRecord;
  private recordToUpdate: Object;

  constructor(public dao: FirebaseDaoService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("WORKS!!!!");
    this.recordToUpdate = Object.assign({}, this.record);
    this.dao.updateRecordInFirebase(this.recordToUpdate, this.record.idKey);
  }

}

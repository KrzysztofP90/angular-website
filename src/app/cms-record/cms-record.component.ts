import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDaoService} from '../service/firebase-dao.service';
import { FirebaseRecord } from '../model/firebase-record';
import { UploadFileService } from '../service/upload-file.service';

@Component({
  selector: 'app-cms-record',
  templateUrl: './cms-record.component.html',
  styleUrls: ['./cms-record.component.css']
})
export class CmsRecordComponent implements OnInit {

  @Input() private record: FirebaseRecord;

  constructor(public dao: FirebaseDaoService, uploadService: UploadFileService) { }

  ngOnInit() {
  }

  updateRecord() {
    this.dao.updateRecordInFirebase(this.record);
  }

  deleteRecord() {
    this.dao.deleteRecord(this.record);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { RecordFromDB } from '../model/record';

@Component({
  selector: 'app-cms-record',
  templateUrl: './cms-record.component.html',
  styleUrls: ['./cms-record.component.css']
})
export class CmsRecordComponent implements OnInit {

  @Input() private record: RecordFromDB;

  constructor() { }

  ngOnInit() {
  }

}

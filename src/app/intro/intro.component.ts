import { Component, OnInit, Input } from '@angular/core';
import { RecordFromDB } from '../model/record';
import { FakeRecordsGenerator } from '../model/generator';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  private generator: FakeRecordsGenerator;
  private records: Array<RecordFromDB>;
  // @Input() records: Array<RecordFromDB>;

  constructor() { 
    this.generator = new FakeRecordsGenerator();
    this.records = this.generator.createExampleRecordsArray();
  }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { RecordFromDB } from '../model/record';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Input() records: Array<RecordFromDB>;
  constructor() { }

  ngOnInit() {
  }
}

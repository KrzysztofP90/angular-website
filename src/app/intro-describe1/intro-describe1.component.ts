import { Component, OnInit, Input } from '@angular/core';
import { RecordFromDB } from '../model/record';

@Component({
  selector: 'app-intro-describe1',
  templateUrl: './intro-describe1.component.html',
  styleUrls: ['./intro-describe1.component.css']
})
export class IntroDescribe1Component implements OnInit {

  @Input() record: RecordFromDB;
  constructor() { }

  ngOnInit() {
  }

}

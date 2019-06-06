import { Component, OnInit, Input } from '@angular/core';
import { FirebaseRecord } from '../model/firebase-record';

@Component({
  selector: 'app-intro-describe1',
  templateUrl: './intro-describe1.component.html',
  styleUrls: ['./intro-describe1.component.css']
})
export class IntroDescribe1Component implements OnInit {

  @Input() record: FirebaseRecord;
  constructor() { }

  ngOnInit() {
  }

}

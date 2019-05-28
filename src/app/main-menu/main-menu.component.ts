import { Component, OnInit, Input } from '@angular/core';
import $ from '../../../node_modules/jquery';
import { RecordFromDB } from '../model/record';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() records: Array<RecordFromDB>;
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
      });
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import $ from '../../../node_modules/jquery';
import { RecordFromDB } from '../model/record';
import { Router } from '@angular/router';
import { FirebaseRecord } from '../model/firebase-record';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() records: Array<FirebaseRecord>;
  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
      });
    });
  }

  selectRecordById(id: number) {
    this.router.navigate(['option', id]);
  }
}

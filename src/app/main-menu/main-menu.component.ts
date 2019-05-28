import { Component, OnInit } from '@angular/core';
import $ from "../../../node_modules/jquery";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {

      $('.first-button').on('click', function () {
    
        $('.animated-icon1').toggleClass('open');
      });
      $('.second-button').on('click', function () {
    
        $('.animated-icon2').toggleClass('open');
      });
      $('.third-button').on('click', function () {
    
        $('.animated-icon3').toggleClass('open');
      });
    });
    
  }

}

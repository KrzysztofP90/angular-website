import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnInit {

  private path: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.path = this.router.url;
  }
}

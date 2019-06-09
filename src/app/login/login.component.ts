import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  };

  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/cms']))
      .catch(err => console.log(err.message));
  }

}

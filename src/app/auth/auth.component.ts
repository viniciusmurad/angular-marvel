import { Component, OnInit } from '@angular/core';
import { Auth } from './models/auth.interface'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth = new Auth('', '');
  submited: any = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.submited = true;
    console.log('submit', this.auth);
  }

}

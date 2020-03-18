import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-marvel'

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = localStorage.getItem('auth')
    if (auth) {
      // this.router.navigate(['main'])
    }
  }
}

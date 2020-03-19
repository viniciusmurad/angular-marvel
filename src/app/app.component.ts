import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CharactersService } from './characters.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-marvel'
  constructor(private router: Router) {}

  ngOnInit() {}

  showHeader() {
    if (this.router.url && this.router.url == '/') {
      return false
    } else {
      return true
    }
  }
}

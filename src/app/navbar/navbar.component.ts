import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSignOutAlt = faSignOutAlt
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/'])
  }

}

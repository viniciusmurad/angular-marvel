import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { Auth } from './models/auth.interface'
import { ApiService } from '../api.service'
import { CharactersService } from '../characters.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  auth = new Auth('', '')
  submited: any = false
  constructor(
    private _api: ApiService,
    private toastr: ToastrService,
    private _charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleSubmit(form) {
    this.submited = true
    const offSet = 5
    if (!form.valid) {
      return
    }

    this._api
      .getCharacters({
        publicKey: this.auth.publicKey,
        privateKey: this.auth.privateKey,
        offSet,
      })
      .subscribe((data: any) => {
        if (data.code === 200) {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              publicKey: this.auth.publicKey,
              privateKey: this.auth.privateKey,
            })
          )

          this._charactersService.setCharacters(data.data)

          this.router.navigate(['/main'])
        } else {
          console.log('Something is wrong. Try again!')
        }
      })
  }
}

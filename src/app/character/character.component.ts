import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from '../api.service'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  auth: any
  character: any
  comics: any
  faArrowLeft = faArrowLeft
  constructor(
    private route: ActivatedRoute,
    private _api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth = JSON.parse(localStorage.getItem('auth'))
    this.route.queryParams.subscribe(params => {
      this.character = JSON.parse(params.data)
      this.getCharacter(this.character.id)
    });
  }

  getCharacter(id) {
    this._api
      .getCharacter({
        publicKey: this.auth.publicKey,
        privateKey: this.auth.privateKey,
        id: id,
      })
      .subscribe((data: any) => {
        if (data.code === 200) {
          data.data.results.map(item => {
            item.avatar = `${item.thumbnail.path}.${item.thumbnail.extension}`
          })
          this.comics = data.data.results
        }
      })
  }

  goBack() {
    this.router.navigate(['/main'])
  }
}

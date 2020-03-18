import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CharactersService } from '../characters.service'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  characters: any
  auth: any
  offSet: number = 5
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _charactersService: CharactersService,
    private _api: ApiService
  ) {}

  ngOnInit(): void {
    this.auth = JSON.parse(localStorage.getItem('auth'))
    this._charactersService.characters.subscribe((data: any) => {
      if (!data.results) {
        this.getCharacters(this.offSet)
      } else {
        this.characters = data
      }
    })
  }

  getCharacters(offSet) {
    this._api
      .getCharacters({
        publicKey: this.auth.publicKey,
        privateKey: this.auth.privateKey,
        offSet,
      })
      .subscribe((data: any) => {
        if (data.code === 200) {
          if (!this.characters) {
            this.characters = data.data
          } else {
            const newData = {
              ...data.data,
              results: [...this.characters.results, ...data.data.results],
            }
            console.log(newData)
            this.characters = newData
          }
        }
      })
  }

  loadMore() {
    this.offSet += 5
    this.getCharacters(this.offSet)
  }
}

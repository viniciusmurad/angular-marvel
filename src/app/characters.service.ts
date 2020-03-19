import { Injectable } from '@angular/core'
import { Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  payloadCharacters = new BehaviorSubject<any>({})
  characters = this.payloadCharacters.asObservable()

  constructor() {}

  setCharacters(characters) {
    this.payloadCharacters.next(characters)
  }
}

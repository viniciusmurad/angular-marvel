import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import md5 from 'js-md5'

import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: any = environment.API_URL
  constructor(private _http: HttpClient) {}

  getCharacters(payload) {
    const { publicKey, offSet } = payload

    const hash = this.hash(payload)

    const _endPoint = `characters?apikey=${publicKey}&ts=${hash.timestamp}&limit=5&offset=${offSet}&hash=${hash.hex}`

    return this._http.get(`${this.url}${_endPoint}`)
  }

  getCharacter(payload) {
    const { publicKey, id } = payload

    const hash = this.hash(payload)

    const _endPoint = `characters/${id}/comics?apikey=${publicKey}&ts=${hash.timestamp}&hash=${hash.hex}`

    return this._http.get(`${this.url}${_endPoint}`)
  }

  hash(payload) {
    const { privateKey, publicKey } = payload
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + privateKey + publicKey)
    return { hex: hash.hex(), timestamp }
  }
}

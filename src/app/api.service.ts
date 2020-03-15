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
    const { privateKey, publicKey, offSet } = payload

    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + privateKey + publicKey)

    const _endPoint = `characters?apikey=${publicKey}&ts=${timestamp}&limit=5&offset=${offSet}&hash=${hash.hex()}`

    return this._http.get(`${this.url}${_endPoint}`)
  }
}

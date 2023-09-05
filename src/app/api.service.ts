import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _http: HttpClient = inject(HttpClient);

  public getCat() {
    return this._http.get('https://cataas.com/cat');
  };

  public getCats() {
    return this._http.get('https://cataas.com/api/cats');
  }

}

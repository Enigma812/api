import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _authKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTExZjU5Yzg2NGJiZTA0ZTVkMTE2ZjVhNWJmYjFjYiIsInN1YiI6IjY0YWQwNzU5YjY4NmI5MDEyZjg4NjNmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A1OX3DUjFn8jWHt82mVoDiBy4-NohG23I3uQdXr7qYw';

  public getCat(): Observable<Blob> {
    const urlTag = 'cute';
    return this._http.get<any>(`https://cataas.com/cat/${urlTag}`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `Bearer ${ this._authKey }`,
        accept: 'application/json'
      },
      params: {
        page: 3,
        size: 20,
        data: new Date().toISOString(),
        types: [ 'color', 'mast' ],
        search: 'Vasya'
      }
    }).pipe(map((response) => response.blob as Blob));
  };

  public postCat(): Observable<any> {
    const cat = {
      name: 'Vasya',
      age: 3,
      color: 'black'
    };
    return this._http.post('https://cataas.com/api/cats', cat, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `Bearer ${ this._authKey }`
      },
      params: {
        pride: 'finny'
      }
    }).pipe();
  }

  public getCats() {
    return this._http.get('https://cataas.com/api/cats');
  }

}

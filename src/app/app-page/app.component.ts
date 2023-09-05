/* eslint-disable @typescript-eslint/ban-types */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'api';
  public cat$: Observable<Object>;
  public cats$: Observable<Object>;

  private readonly _api: ApiService = inject(ApiService);

  constructor() {
    this.cat$ = new Observable<Object>();
    this.cats$ = new Observable<Object[]>();
  }

  public getCat() {
    this.cats$ = this._api.getCats();
    // this.cats$.pipe(switchMap(() => this._api.getCats()));
    // this._api.getCats().subscribe((a) => {
    //   console.log(a);
    // });
  }

}

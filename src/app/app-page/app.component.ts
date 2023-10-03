/* eslint-disable @typescript-eslint/ban-types */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map, switchMap } from 'rxjs';
import { blobToSafeUrl } from 'src/utils/safeUrl';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'api';
  public catImage$: Observable<SafeUrl>;
  public cat$: Observable<Object>;
  public cats$: Observable<Object>;

  private readonly _sanitizer = inject(DomSanitizer);
  private readonly _api: ApiService = inject(ApiService);

  constructor() {
    this.cat$ = new Observable<Object>();
    this.cats$ = new Observable<Object[]>();
    this.catImage$ = new Observable<SafeUrl>();
  }

  public getCat() {
    this.cat$ = this._api.getCat();
    this.catImage$ = this._api.getCat().pipe(
      map(blobToSafeUrl(this._sanitizer))
    );
    // this.cats$.pipe(switchMap(() => this._api.getCats()));
    // this._api.getCats().subscribe((a) => {
    //   console.log(a);
    // });
  }

  public postCat() {
    this._api.postCat().subscribe();
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AsyncValue, makeAsyncWithCache } from '@elemental-concept/rx-toolkit';

import { map, switchMap, throwError, timer } from 'rxjs';

@Component({
  selector: 'rx-toolkit-make-async-with-cache-example',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './make-async-with-cache-example.page.html',
  styleUrls: [ './make-async-with-cache-example.page.scss' ]
})
export class MakeAsyncWithCacheExamplePage {
  protected asyncValue: AsyncValue<string> = { state: 'complete', data: 'Empty' };

  protected loadData = () =>
    makeAsyncWithCache(
      timer(1000).pipe(map(this.generateResult)),
      this.getCache()
    )
      .subscribe(asyncValue => this.asyncValue = asyncValue);

  protected makeError = () =>
    makeAsyncWithCache(
      timer(1000).pipe(switchMap(() => throwError(() => 'Error happened'))),
      this.getCache()
    )
      .subscribe(asyncValue => this.asyncValue = asyncValue);

  private generateResult = () => `Random value: ${Math.round(Math.random() * 10000)}`;

  private getCache = () =>
    this.asyncValue.state === 'complete' || this.asyncValue.state === 'loading-cached'
      ? this.asyncValue.data
      : 'No cache available';
}

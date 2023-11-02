import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AsyncValue, makeAsync } from '@elemental-concept/rx-toolkit';

import { map, switchMap, throwError, timer } from 'rxjs';

@Component({
  selector: 'rx-toolkit-make-async-example',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './make-async-example.page.html',
  styleUrls: [ './make-async-example.page.scss' ]
})
export class MakeAsyncExamplePage {
  protected asyncValue?: AsyncValue<string>;

  protected loadData = () =>
    makeAsync(timer(1000).pipe(map(() => 'Data loaded after 1s delay!')))
      .subscribe(asyncValue => this.asyncValue = asyncValue);

  protected makeError = () =>
    makeAsync(timer(1000).pipe(switchMap(() => throwError(() => 'Error happened'))))
      .subscribe(asyncValue => this.asyncValue = asyncValue);
}

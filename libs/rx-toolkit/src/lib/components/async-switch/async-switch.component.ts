import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { asyncLoading, AsyncValue } from '../../types';

@Component({
  selector: 'rxt-async-switch[state]',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './async-switch.component.html',
  styleUrls: [ './async-switch.component.scss' ]
})
export class AsyncSwitchComponent<T> implements OnDestroy {
  @Input()
  skipCache = true;

  @Input()
  set state(value: AsyncValue<T> | Observable<AsyncValue<T>>) {
    this.sub?.unsubscribe();

    if (value instanceof Observable) {
      this.asyncValue = asyncLoading(false);
      this.sub = value.subscribe(this.updateState);
      return;
    }

    this.asyncValue = value;
  }

  protected asyncValue!: AsyncValue<T>;

  protected sub?: Subscription;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private updateState = (value: AsyncValue<T>) => this.asyncValue = value;
}

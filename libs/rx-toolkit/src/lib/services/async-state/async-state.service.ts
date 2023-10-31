import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AsyncStateService {
  private readonly counter$: BehaviorSubject<number>;

  private readonly busy$: Observable<boolean>;

  private readonly idle$: Observable<boolean>;

  private static _instance?: AsyncStateService;

  /**
   * This is a very complicated initialisation.
   *
   * Functions like `makeAsync()` cannot rely on Angular dependency injection, so they have to
   * acquire instance by calling static method `instance()`. But that means that now Angular DI is broken.
   *
   * What we do here is that we allow two instances of `AsyncStateService` to co-exist
   * and share the same base `counter$` observable.
   */
  constructor() {
    this.counter$ = AsyncStateService._instance !== undefined
      ? AsyncStateService._instance.counter$
      : new BehaviorSubject<number>(0);

    this.busy$ = this.counter$.pipe(map(counter => counter > 0));
    this.idle$ = this.counter$.pipe(map(counter => counter === 0));
  }

  static instance(): AsyncStateService {
    if (AsyncStateService._instance === undefined) {
      AsyncStateService._instance = new AsyncStateService();
    }

    return AsyncStateService._instance;
  }

  get busy(): Observable<boolean> {
    return this.busy$;
  }

  get idle(): Observable<boolean> {
    return this.idle$;
  }
}

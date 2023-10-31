import { catchError, concat, map, Observable, of } from 'rxjs';

import { asyncData, asyncError, asyncLoading, asyncLoadingCached, AsyncValue } from '../types';

export function makeAsync<T>(observable: Observable<T>, handleError = true): Observable<AsyncValue<T>> {
  return concat(
    of(asyncLoading()),
    asyncPipe(observable, handleError)
  );
}

export function makeAsyncWithCache<T>(
  observable: Observable<T>,
  cache: T,
  handleError = true
): Observable<AsyncValue<T>> {
  return concat(
    of(asyncLoadingCached(cache)),
    asyncPipe(observable, handleError)
  );
}

function asyncPipe<T>(observable: Observable<T>, handleError: boolean): Observable<AsyncValue<T>> {
  const result = observable.pipe(map(response => asyncData(response)));

  if (handleError) {
    return result.pipe(catchError(error => of(asyncError(error))));
  }

  return result;
}

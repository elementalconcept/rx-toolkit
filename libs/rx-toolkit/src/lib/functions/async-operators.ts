import { filter, map, Observable, of, switchMap, tap, throwError } from 'rxjs';

import { AsyncData, AsyncValue } from '../types';

export function whenAsyncDataAvailable() {
  return <T>(source: Observable<AsyncValue<T>>): Observable<T> => {
    return source.pipe(
      filter(asyncValue => asyncValue.state === 'complete' || asyncValue.state === 'loading-cached'),
      map(asyncData => (asyncData as AsyncData<T>).data)
    );
  };
}

export function whileLoading(loading: () => void) {
  return <T>(source: Observable<AsyncValue<T>>): Observable<T> => {
    return source.pipe(
      tap(asyncValue =>
        asyncValue.state === 'loading' || asyncValue.state === 'loading-cached'
          ? loading()
          : undefined
      ),
      whenAsyncDataAvailable()
    );
  };
}

export function mapAsync<T, R>(complete: (data: T) => R, loading: () => R) {
  return (source: Observable<AsyncValue<T>>): Observable<R> => {
    return source.pipe(
      switchMap(asyncValue => {
        if (asyncValue.state === 'error') {
          return throwError(() => asyncValue.error);
        }

        return asyncValue.state === 'complete' || asyncValue.state === 'loading-cached'
          ? of(complete(asyncValue.data))
          : of(loading());
      })
    );
  };
}

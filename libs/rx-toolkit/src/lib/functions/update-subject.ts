import { Subject, take } from 'rxjs';

import { asyncData, AsyncValue } from '../types';
import { takeAsyncData } from './async-operators';

export function updateSubject<T>(subject: Subject<T>, reducer: (data: T) => T): void;
export function updateSubject<T>(subject: Subject<T>, data: Partial<T>): void;
export function updateSubject<T>(subject: Subject<T>, dataOrReducer: Partial<T> | ((data: T) => T)): void {
  subject
    .pipe(take(1))
    .subscribe(result => {
      subject.next(
        typeof dataOrReducer === 'function'
          ? dataOrReducer(result)
          : { ...result, ...dataOrReducer }
      );
    });
}

export function updateAsyncSubject<T>(subject: Subject<AsyncValue<T>>, reducer: (data: T) => T): void;
export function updateAsyncSubject<T>(subject: Subject<AsyncValue<T>>, data: Partial<T>): void;
export function updateAsyncSubject<T>(
  subject: Subject<AsyncValue<T>>,
  dataOrReducer: Partial<T> | ((data: T) => T)
): void {
  subject
    .pipe(takeAsyncData())
    .subscribe(result => {
      subject.next(asyncData(
        typeof dataOrReducer === 'function'
          ? dataOrReducer(result)
          : { ...result, ...dataOrReducer },
        false
      ));
    });
}

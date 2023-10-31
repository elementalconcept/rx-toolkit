import { AsyncStateService } from '../services';

export interface AsyncLoading {
  state: 'loading';
}

export interface AsyncLoadingCached<T> {
  state: 'loading-cached';
  data: T;
}

export interface AsyncError {
  state: 'error';
  error: Error;
}

export interface AsyncData<T> {
  state: 'complete';
  data: T;
}

export type AsyncValue<T> = AsyncData<T> | AsyncLoading | AsyncError | AsyncLoadingCached<T>;

export function asyncLoading(updateIdleState = true): AsyncLoading {
  if (updateIdleState) {
    AsyncStateService.instance().add();
  }

  return { state: 'loading' };
}

export function asyncLoadingCached<T>(data: T, updateIdleState = true): AsyncLoadingCached<T> {
  if (updateIdleState) {
    AsyncStateService.instance().add();
  }

  return { state: 'loading-cached', data };
}

export function asyncError(error: Error, updateIdleState = true): AsyncError {
  if (updateIdleState) {
    AsyncStateService.instance().remove();
  }

  return { state: 'error', error };
}

export function asyncData<T>(data: T, updateIdleState = true): AsyncData<T> {
  if (updateIdleState) {
    AsyncStateService.instance().remove();
  }

  return { state: 'complete', data };
}

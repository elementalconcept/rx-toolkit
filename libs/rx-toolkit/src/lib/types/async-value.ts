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

export const asyncLoading = (): AsyncLoading => ({ state: 'loading' });

export const asyncError = (error: Error): AsyncError => ({ state: 'error', error });

export const asyncData = <T>(data: T): AsyncData<T> => ({ state: 'complete', data });

export const asyncLoadingCached = <T>(data: T): AsyncLoadingCached<T> => ({ state: 'loading-cached', data });

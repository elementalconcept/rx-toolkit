import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./make-async-example/make-async-example.page').then(m => m.MakeAsyncExamplePage)
  },
  {
    path: 'make-async-with-cache',
    loadComponent: () =>
      import('./make-async-with-cache-example/make-async-with-cache-example.page')
        .then(m => m.MakeAsyncWithCacheExamplePage)
  }
];

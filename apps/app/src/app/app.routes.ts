import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./make-async-example/make-async-example.page').then(m => m.MakeAsyncExamplePage)
  }
];

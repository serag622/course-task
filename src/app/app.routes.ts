import { Routes } from '@angular/router';
import { mainRoutes } from './layout/main.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main/main.component').then((c) => c.MainComponent),
    children: [...mainRoutes],
  },
];

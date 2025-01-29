import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch :'full'
  },
  {
    path: 'course-list',
    loadComponent: () =>
      import('../pages/course-list/course-list.component').then((c) => c.CourseListComponent),
  },
  {
    path: 'course-details',
    loadComponent: () =>
      import('../pages/course-details/course-details.component').then((c) => c.CourseDetailsComponent),
  },
];
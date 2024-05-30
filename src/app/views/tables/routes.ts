import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Colors'
    },
    children: [
      {
        path: 'tables',
        redirectTo: 'tables',
        pathMatch: 'full'
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables.component').then(m => m.TablesComponent),
        data: {
          title: 'Colors'
        }
      },
      
    ]
  }
];


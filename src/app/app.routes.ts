import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/repository/search',
    pathMatch: 'full',
  },
  {
    path: 'repository/search',
    loadComponent: () =>
      import('@features/repository-search/components/repository-search/repository-search.component').then(
        c => c.RepositorySearchComponent,
      ),
  },
];

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
  {
    path: 'repository/:owner/:repo/issues',
    loadComponent: () =>
      import('@features/repository-issues/components/repository-issues/repository-issues.component').then(
        c => c.RepositoryIssuesComponent,
      ),
  },
  {
    path: 'repository/:owner/:repo/chart',
    loadComponent: () =>
      import('@features/repository-chart/components/repository-chart/repository-chart.component').then(
        c => c.RepositoryChartComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '/repository/search',
  },
];

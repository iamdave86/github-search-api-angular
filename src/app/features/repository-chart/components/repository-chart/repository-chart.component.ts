import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, map, Observable, of, Subscription } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChartConfiguration } from 'chart.js';

import { SubHeaderComponent } from '@shared/components/sub-header/sub-header.component';
import { GithubApiService } from '@shared/services/github-api/github-api.service';
import { GetRepositoryResponse } from '@shared/interfaces/repository.interface';
import { ChartComponent } from '@shared/components/chart/chart.component';

@Component({
  selector: 'app-repository-chart',
  templateUrl: './repository-chart.component.html',
  styleUrls: ['./repository-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SubHeaderComponent, MatProgressSpinnerModule, ChartComponent],
})
export class RepositoryChartComponent {
  private subscriptions: Subscription = new Subscription();
  private repository$: Observable<GetRepositoryResponse> = EMPTY;

  public owner: string = '';
  public repo: string = '';
  public readonly isLoading$: Observable<boolean>;
  public error$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public barChartData$: Observable<ChartConfiguration<'bar'>['data']> = new Observable<
    ChartConfiguration<'bar'>['data']
  >();

  constructor(private githubApiService: GithubApiService, private route: ActivatedRoute) {
    this.isLoading$ = this.githubApiService.isLoading;

    this.subscriptions.add(
      this.route.paramMap.subscribe(params => {
        this.owner = params.get('owner')!;
        this.repo = params.get('repo')!;

        this.fetchRepository();
      }),
    );

    this.barChartData$ = this.repository$.pipe(
      map(repo => ({
        labels: ['Stargazers', 'Forks', 'Open issues'],
        datasets: [
          {
            data: [repo.stargazers_count, repo.forks_count, repo.open_issues_count],
            label: '',
          },
        ],
      })),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private fetchRepository() {
    if (this.owner && this.repo) {
      this.repository$ = this.githubApiService.getRepository(this.owner, this.repo).pipe(
        catchError(error => {
          if (error.status === 404) {
            this.error$.next('Repository not found');
          }
          return of();
        }),
      );
    }
  }
}

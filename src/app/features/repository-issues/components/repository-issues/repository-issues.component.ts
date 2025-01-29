import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, catchError, EMPTY, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SubHeaderComponent } from '@shared/components/sub-header/sub-header.component';
import { GithubApiService } from '@shared/services/github-api/github-api.service';
import { ActivatedRoute } from '@angular/router';
import { GetRepositoryIssuesResponseItem } from '@features/repository-search/interfaces/repository.interface';
import { RepositoryIssuesListComponent } from '../repository-issues-list/repository-issues-list.component';

@Component({
  selector: 'app-repository-issues',
  templateUrl: './repository-issues.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SubHeaderComponent, MatProgressSpinnerModule, RepositoryIssuesListComponent],
})
export class RepositoryIssuesComponent {
  public owner: string = '';
  public repo: string = '';
  public readonly isLoading$: Observable<boolean>;
  public repositoryIssues$: Observable<GetRepositoryIssuesResponseItem[]> = EMPTY;
  public error$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private githubApiService: GithubApiService, private route: ActivatedRoute) {
    this.isLoading$ = this.githubApiService.isLoading;

    this.route.paramMap.subscribe(params => {
      this.owner = params.get('owner')!;
      this.repo = params.get('repo')!;

      this.fetchIssues();
    });
  }

  private fetchIssues() {
    if (this.owner && this.repo) {
      this.repositoryIssues$ = this.githubApiService.getRepositoryIssues(this.owner, this.repo).pipe(
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

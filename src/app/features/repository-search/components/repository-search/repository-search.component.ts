import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SubHeaderComponent } from '@shared/components/sub-header/sub-header.component';
import { GithubApiService } from '@shared/services/github-api/github-api.service';
import { RepositorySearchListComponent } from '../repository-search-list/repository-search-list.component';
import { GetRepositoriesByNameResponseItem } from '@features/repository-search/interfaces/repository.interface';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SubHeaderComponent,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RepositorySearchListComponent,
  ],
})
export class RepositorySearchComponent {
  public readonly form: FormGroup;
  public readonly isLoading$: Observable<boolean>;
  public repositorySearchListItems$: Observable<GetRepositoriesByNameResponseItem[]> = EMPTY;

  constructor(private githubApiService: GithubApiService, private formBuilder: FormBuilder) {
    this.isLoading$ = this.githubApiService.isLoading;
    this.form = this.initForm();
  }

  public search() {
    if (this.form.valid) {
      const { search } = this.form.value;
      this.repositorySearchListItems$ = this.githubApiService.getRepositoriesByName(search);
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SubHeaderComponent } from '@shared/components/sub-header/sub-header.component';
import { GithubApiService } from '@shared/services/github-api/github-api.service';

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
  ],
})
export class RepositorySearchComponent {
  public form: FormGroup;
  public isLoading$: Observable<boolean>;

  constructor(private githubApiService: GithubApiService, private formBuilder: FormBuilder) {
    this.isLoading$ = this.githubApiService.isLoading;
    this.form = this.initForm();
  }

  public search() {
    if (this.form.valid) {
      const { search } = this.form.value;
      this.githubApiService.getRepositoriesByName(search).subscribe(console.log);
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }
}

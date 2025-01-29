import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SubHeaderComponent } from '@shared/components/sub-header/sub-header.component';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SubHeaderComponent, ReactiveFormsModule, MatIconModule, MatInputModule, MatButtonModule],
})
export class RepositorySearchComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.initForm();
  }

  public search() {
    if (this.form.valid) {
      const { search } = this.form.value;
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }
}

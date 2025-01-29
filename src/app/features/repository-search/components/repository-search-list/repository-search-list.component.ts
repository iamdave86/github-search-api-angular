import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { GetRepositoriesByNameResponseItem } from '@features/repository-search/interfaces/repository.interface';

@Component({
  selector: 'app-repository-search-list',
  templateUrl: './repository-search-list.component.html',
  styleUrls: ['./repository-search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class RepositorySearchListComponent {
  @Input() public repositoryList: GetRepositoriesByNameResponseItem[] = [];
}

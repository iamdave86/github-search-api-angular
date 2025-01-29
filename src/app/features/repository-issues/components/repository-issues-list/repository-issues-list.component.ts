import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { GetRepositoryIssuesResponseItem } from '@shared/interfaces/repository.interface';

@Component({
  selector: 'app-repository-issues-list',
  templateUrl: './repository-issues-list.component.html',
  styleUrls: ['./repository-issues-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class RepositoryIssuesListComponent {
  @Input() public repositoryIssues: GetRepositoryIssuesResponseItem[] = [];
}

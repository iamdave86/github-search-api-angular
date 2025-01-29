import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryIssuesListComponent } from './repository-issues-list.component';

describe('RepositoryIssuesListComponent', () => {
  let component: RepositoryIssuesListComponent;
  let fixture: ComponentFixture<RepositoryIssuesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(RepositoryIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

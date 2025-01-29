import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorySearchListComponent } from './repository-search-list.component';

describe('RepositorySearchListComponent', () => {
  let component: RepositorySearchListComponent;
  let fixture: ComponentFixture<RepositorySearchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(RepositorySearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

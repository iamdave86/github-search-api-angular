import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderComponent } from './sub-header.component';

describe('SubHeaderComponent', () => {
  let component: SubHeaderComponent;
  let fixture: ComponentFixture<SubHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(SubHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input title correctly', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Title');
  });

  it('should render empty title when no input is provided', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2')?.textContent).toBe('');
  });
});

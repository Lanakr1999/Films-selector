import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSearchFormComponent } from './films-search-form.component';

describe('FilmsSearchFormComponent', () => {
  let component: FilmsSearchFormComponent;
  let fixture: ComponentFixture<FilmsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

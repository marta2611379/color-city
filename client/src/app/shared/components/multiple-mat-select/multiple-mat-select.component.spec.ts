import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleMatSelectComponent } from './multiple-mat-select.component';

describe(' MultipleMatSelectComponent', () => {
  let component: MultipleMatSelectComponent;
  let fixture: ComponentFixture<MultipleMatSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleMatSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleMatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

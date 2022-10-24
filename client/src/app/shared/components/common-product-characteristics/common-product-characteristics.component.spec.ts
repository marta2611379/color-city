import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProductCharacteristicsComponent } from './common-product-characteristics.component';

describe('CommonProductCharacteristicsComponent', () => {
  let component: CommonProductCharacteristicsComponent;
  let fixture: ComponentFixture<CommonProductCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonProductCharacteristicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonProductCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

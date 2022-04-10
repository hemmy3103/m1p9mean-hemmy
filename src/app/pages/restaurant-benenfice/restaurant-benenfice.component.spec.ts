import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBenenficeComponent } from './restaurant-benenfice.component';

describe('RestaurantBenenficeComponent', () => {
  let component: RestaurantBenenficeComponent;
  let fixture: ComponentFixture<RestaurantBenenficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBenenficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBenenficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

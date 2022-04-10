import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantModalAddComponent } from './restaurant-modal-add.component';

describe('RestaurantModalAddComponent', () => {
  let component: RestaurantModalAddComponent;
  let fixture: ComponentFixture<RestaurantModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

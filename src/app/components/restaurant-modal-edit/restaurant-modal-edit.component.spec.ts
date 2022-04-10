import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantModalEditComponent } from './restaurant-modal-edit.component';

describe('RestaurantModalEditComponent', () => {
  let component: RestaurantModalEditComponent;
  let fixture: ComponentFixture<RestaurantModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

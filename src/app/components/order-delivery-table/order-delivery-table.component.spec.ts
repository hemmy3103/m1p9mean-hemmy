import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveryTableComponent } from './order-delivery-table.component';

describe('OrderDeliveryTableComponent', () => {
  let component: OrderDeliveryTableComponent;
  let fixture: ComponentFixture<OrderDeliveryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeliveryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

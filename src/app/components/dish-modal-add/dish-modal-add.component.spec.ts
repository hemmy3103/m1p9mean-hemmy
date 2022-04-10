import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishModalAddComponent } from './dish-modal-add.component';

describe('DishModalAddComponent', () => {
  let component: DishModalAddComponent;
  let fixture: ComponentFixture<DishModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

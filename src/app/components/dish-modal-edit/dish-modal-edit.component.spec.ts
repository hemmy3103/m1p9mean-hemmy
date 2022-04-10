import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishModalEditComponent } from './dish-modal-edit.component';

describe('DishModalEditComponent', () => {
  let component: DishModalEditComponent;
  let fixture: ComponentFixture<DishModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

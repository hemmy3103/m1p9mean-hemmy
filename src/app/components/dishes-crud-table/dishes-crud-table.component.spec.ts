import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesCrudTableComponent } from './dishes-crud-table.component';

describe('DishesCrudTableComponent', () => {
  let component: DishesCrudTableComponent;
  let fixture: ComponentFixture<DishesCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesCrudTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

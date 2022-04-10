import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCrudTableComponent } from './client-crud-table.component';

describe('ClientCrudTableComponent', () => {
  let component: ClientCrudTableComponent;
  let fixture: ComponentFixture<ClientCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCrudTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierTableComponent } from './cashier-table.component';

describe('CashierTableComponent', () => {
  let component: CashierTableComponent;
  let fixture: ComponentFixture<CashierTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

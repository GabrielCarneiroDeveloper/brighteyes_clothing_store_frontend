import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierModalFinishPurchaseComponent } from './cashier-modal-finish-purchase.component';

describe('CashierModalFinishPurchaseComponent', () => {
  let component: CashierModalFinishPurchaseComponent;
  let fixture: ComponentFixture<CashierModalFinishPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierModalFinishPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierModalFinishPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

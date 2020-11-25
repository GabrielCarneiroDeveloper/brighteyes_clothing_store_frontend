import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierModalComponent } from './cashier-modal.component';

describe('CashierModalComponent', () => {
  let component: CashierModalComponent;
  let fixture: ComponentFixture<CashierModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

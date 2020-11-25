import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesFormClothesListComponent } from './sales-form-clothes-list.component';

describe('SalesFormClothesListComponent', () => {
  let component: SalesFormClothesListComponent;
  let fixture: ComponentFixture<SalesFormClothesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesFormClothesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesFormClothesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

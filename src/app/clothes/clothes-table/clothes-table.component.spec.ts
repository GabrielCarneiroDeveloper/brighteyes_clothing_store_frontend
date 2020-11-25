import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesTableComponent } from './clothes-table.component';

describe('ClothesTableComponent', () => {
  let component: ClothesTableComponent;
  let fixture: ComponentFixture<ClothesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

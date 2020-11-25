import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPageComponent } from './hot-page.component';

describe('HotPageComponent', () => {
  let component: HotPageComponent;
  let fixture: ComponentFixture<HotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

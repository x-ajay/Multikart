import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fashion3Component } from './fashion3.component';

describe('Fashion3Component', () => {
  let component: Fashion3Component;
  let fixture: ComponentFixture<Fashion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fashion3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fashion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

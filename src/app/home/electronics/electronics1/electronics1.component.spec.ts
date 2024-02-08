import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics1Component } from './electronics1.component';

describe('Electronics1Component', () => {
  let component: Electronics1Component;
  let fixture: ComponentFixture<Electronics1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Electronics1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Electronics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

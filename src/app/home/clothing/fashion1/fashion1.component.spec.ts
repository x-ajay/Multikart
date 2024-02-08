import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fashion1Component } from './fashion1.component';

describe('Fashion1Component', () => {
  let component: Fashion1Component;
  let fixture: ComponentFixture<Fashion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fashion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fashion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

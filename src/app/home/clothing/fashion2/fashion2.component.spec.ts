import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fashion2Component } from './fashion2.component';

describe('Fashion2Component', () => {
  let component: Fashion2Component;
  let fixture: ComponentFixture<Fashion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fashion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fashion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

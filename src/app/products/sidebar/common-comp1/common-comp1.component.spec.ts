import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComp1Component } from './common-comp1.component';

describe('CommonComp1Component', () => {
  let component: CommonComp1Component;
  let fixture: ComponentFixture<CommonComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

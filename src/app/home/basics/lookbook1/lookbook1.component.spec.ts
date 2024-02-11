import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lookbook1Component } from './lookbook1.component';

describe('Lookbook1Component', () => {
  let component: Lookbook1Component;
  let fixture: ComponentFixture<Lookbook1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lookbook1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lookbook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

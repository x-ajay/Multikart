import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncompComponent } from './commoncomp.component';

describe('CommoncompComponent', () => {
  let component: CommoncompComponent;
  let fixture: ComponentFixture<CommoncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoncompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommoncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

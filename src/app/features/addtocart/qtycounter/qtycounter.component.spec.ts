import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtycounterComponent } from './qtycounter.component';

describe('QtycounterComponent', () => {
  let component: QtycounterComponent;
  let fixture: ComponentFixture<QtycounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtycounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtycounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

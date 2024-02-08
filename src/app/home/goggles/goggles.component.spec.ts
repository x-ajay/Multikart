import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GogglesComponent } from './goggles.component';

describe('GogglesComponent', () => {
  let component: GogglesComponent;
  let fixture: ComponentFixture<GogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GogglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

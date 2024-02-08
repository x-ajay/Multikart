import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSliderComponent } from './no-slider.component';

describe('NoSliderComponent', () => {
  let component: NoSliderComponent;
  let fixture: ComponentFixture<NoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

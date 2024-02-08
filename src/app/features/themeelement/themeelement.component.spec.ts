import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeelementComponent } from './themeelement.component';

describe('ThemeelementComponent', () => {
  let component: ThemeelementComponent;
  let fixture: ComponentFixture<ThemeelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

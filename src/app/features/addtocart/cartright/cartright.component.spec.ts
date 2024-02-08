import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartrightComponent } from './cartright.component';

describe('CartrightComponent', () => {
  let component: CartrightComponent;
  let fixture: ComponentFixture<CartrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

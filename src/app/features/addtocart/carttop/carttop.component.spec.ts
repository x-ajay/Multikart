import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarttopComponent } from './carttop.component';

describe('CarttopComponent', () => {
  let component: CarttopComponent;
  let fixture: ComponentFixture<CarttopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarttopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

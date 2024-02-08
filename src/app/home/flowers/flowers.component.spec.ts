import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FLowersComponent } from './flowers.component';

describe('FLowersComponent', () => {
  let component: FLowersComponent;
  let fixture: ComponentFixture<FLowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FLowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FLowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

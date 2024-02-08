import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreegridComponent } from './threegrid.component';

describe('ThreegridComponent', () => {
  let component: ThreegridComponent;
  let fixture: ComponentFixture<ThreegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreegridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

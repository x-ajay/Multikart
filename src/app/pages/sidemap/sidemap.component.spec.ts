import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemapComponent } from './sidemap.component';

describe('SidemapComponent', () => {
  let component: SidemapComponent;
  let fixture: ComponentFixture<SidemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

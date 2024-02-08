import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixgridComponent } from './sixgrid.component';

describe('SixgridComponent', () => {
  let component: SixgridComponent;
  let fixture: ComponentFixture<SixgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

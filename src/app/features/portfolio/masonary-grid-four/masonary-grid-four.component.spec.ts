import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryGridFourComponent } from './masonary-grid-four.component';

describe('MasonaryGridFourComponent', () => {
  let component: MasonaryGridFourComponent;
  let fixture: ComponentFixture<MasonaryGridFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonaryGridFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonaryGridFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryGridTwoComponent } from './masonary-grid-two.component';

describe('MasonaryGridTwoComponent', () => {
  let component: MasonaryGridTwoComponent;
  let fixture: ComponentFixture<MasonaryGridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonaryGridTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonaryGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

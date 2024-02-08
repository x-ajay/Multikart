import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryGridThreeComponent } from './masonary-grid-three.component';

describe('MasonaryGridThreeComponent', () => {
  let component: MasonaryGridThreeComponent;
  let fixture: ComponentFixture<MasonaryGridThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonaryGridThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonaryGridThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

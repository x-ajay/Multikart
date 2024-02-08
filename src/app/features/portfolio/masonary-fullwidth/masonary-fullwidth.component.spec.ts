import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryFullwidthComponent } from './masonary-fullwidth.component';

describe('MasonaryFullwidthComponent', () => {
  let component: MasonaryFullwidthComponent;
  let fixture: ComponentFixture<MasonaryFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonaryFullwidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonaryFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

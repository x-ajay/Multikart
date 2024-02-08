import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemosComponent } from './new-demos.component';

describe('NewDemosComponent', () => {
  let component: NewDemosComponent;
  let fixture: ComponentFixture<NewDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

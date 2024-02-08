import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosliderComponent } from './videoslider.component';

describe('VideosliderComponent', () => {
  let component: VideosliderComponent;
  let fixture: ComponentFixture<VideosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

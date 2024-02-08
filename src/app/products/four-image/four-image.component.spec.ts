import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourImageComponent } from './four-image.component';

describe('FourImageComponent', () => {
  let component: FourImageComponent;
  let fixture: ComponentFixture<FourImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

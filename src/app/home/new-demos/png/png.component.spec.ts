import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PngComponent } from './png.component';

describe('PngComponent', () => {
  let component: PngComponent;
  let fixture: ComponentFixture<PngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

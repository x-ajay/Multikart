import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSwatchComponent } from './image-swatch.component';

describe('ImageSwatchComponent', () => {
  let component: ImageSwatchComponent;
  let fixture: ComponentFixture<ImageSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSwatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

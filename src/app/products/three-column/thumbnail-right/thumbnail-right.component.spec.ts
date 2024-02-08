import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailRightComponent } from './thumbnail-right.component';

describe('ThumbnailRightComponent', () => {
  let component: ThumbnailRightComponent;
  let fixture: ComponentFixture<ThumbnailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

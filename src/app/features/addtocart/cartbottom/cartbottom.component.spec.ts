import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbottomComponent } from './cartbottom.component';

describe('CartbottomComponent', () => {
  let component: CartbottomComponent;
  let fixture: ComponentFixture<CartbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartbottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

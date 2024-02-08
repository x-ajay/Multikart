import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmodelpopupComponent } from './cartmodelpopup.component';

describe('CartmodelpopupComponent', () => {
  let component: CartmodelpopupComponent;
  let fixture: ComponentFixture<CartmodelpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartmodelpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartmodelpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

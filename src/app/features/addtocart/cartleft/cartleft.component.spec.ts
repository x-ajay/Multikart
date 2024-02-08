import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartleftComponent } from './cartleft.component';

describe('CartleftComponent', () => {
  let component: CartleftComponent;
  let fixture: ComponentFixture<CartleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

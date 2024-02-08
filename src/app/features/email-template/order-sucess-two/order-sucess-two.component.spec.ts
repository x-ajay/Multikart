import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucessTwoComponent } from './order-sucess-two.component';

describe('OrderSucessTwoComponent', () => {
  let component: OrderSucessTwoComponent;
  let fixture: ComponentFixture<OrderSucessTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSucessTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSucessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

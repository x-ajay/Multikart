import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCommonPageComponent } from './products-common-page.component';

describe('ProductsCommonPageComponent', () => {
  let component: ProductsCommonPageComponent;
  let fixture: ComponentFixture<ProductsCommonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCommonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

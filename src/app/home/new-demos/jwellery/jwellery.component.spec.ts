import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwelleryComponent } from './jwellery.component';

describe('JwelleryComponent', () => {
  let component: JwelleryComponent;
  let fixture: ComponentFixture<JwelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwelleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

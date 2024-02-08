import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongbookComponent } from './longbook.component';

describe('LongbookComponent', () => {
  let component: LongbookComponent;
  let fixture: ComponentFixture<LongbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

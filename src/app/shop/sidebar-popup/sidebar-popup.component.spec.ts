import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPopupComponent } from './sidebar-popup.component';

describe('SidebarPopupComponent', () => {
  let component: SidebarPopupComponent;
  let fixture: ComponentFixture<SidebarPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

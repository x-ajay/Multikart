import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosidebarComponent } from './nosidebar.component';

describe('NosidebarComponent', () => {
  let component: NosidebarComponent;
  let fixture: ComponentFixture<NosidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

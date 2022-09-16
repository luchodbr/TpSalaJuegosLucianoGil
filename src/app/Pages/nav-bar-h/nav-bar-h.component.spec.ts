import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHComponent } from './nav-bar-h.component';

describe('NavBarHComponent', () => {
  let component: NavBarHComponent;
  let fixture: ComponentFixture<NavBarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

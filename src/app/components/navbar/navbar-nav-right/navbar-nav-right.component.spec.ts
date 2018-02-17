import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavRightComponent } from './navbar-nav-right.component';

describe('NavbarNavRightComponent', () => {
  let component: NavbarNavRightComponent;
  let fixture: ComponentFixture<NavbarNavRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNavRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNavRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

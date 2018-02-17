import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavRightUserDropdownComponent } from './navbar-nav-right-user-dropdown.component';

describe('NavbarNavRightUserDropdownComponent', () => {
  let component: NavbarNavRightUserDropdownComponent;
  let fixture: ComponentFixture<NavbarNavRightUserDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNavRightUserDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNavRightUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

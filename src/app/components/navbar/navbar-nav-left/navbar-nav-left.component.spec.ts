import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavLeftComponent } from './navbar-nav-left.component';

describe('NavbarNavLeftComponent', () => {
  let component: NavbarNavLeftComponent;
  let fixture: ComponentFixture<NavbarNavLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNavLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNavLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

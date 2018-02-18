import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMainEndMenuUserComponent } from './navigation-main-end-menu-user.component';

describe('NavigationMainEndMenuUserComponent', () => {
  let component: NavigationMainEndMenuUserComponent;
  let fixture: ComponentFixture<NavigationMainEndMenuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMainEndMenuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMainEndMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

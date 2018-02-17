import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNavbarNavRightComponent } from './community-navbar-nav-right.component';

describe('CommunityNavbarNavRightComponent', () => {
  let component: CommunityNavbarNavRightComponent;
  let fixture: ComponentFixture<CommunityNavbarNavRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityNavbarNavRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNavbarNavRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

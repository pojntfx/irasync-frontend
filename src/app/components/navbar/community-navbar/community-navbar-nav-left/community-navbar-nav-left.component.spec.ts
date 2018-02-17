import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNavbarNavLeftComponent } from './community-navbar-nav-left.component';

describe('CommunityNavbarNavLeftComponent', () => {
  let component: CommunityNavbarNavLeftComponent;
  let fixture: ComponentFixture<CommunityNavbarNavLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityNavbarNavLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNavbarNavLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

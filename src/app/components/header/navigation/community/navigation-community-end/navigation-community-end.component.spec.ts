import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCommunityEndComponent } from './navigation-community-end.component';

describe('NavigationCommunityEndComponent', () => {
  let component: NavigationCommunityEndComponent;
  let fixture: ComponentFixture<NavigationCommunityEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCommunityEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCommunityEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

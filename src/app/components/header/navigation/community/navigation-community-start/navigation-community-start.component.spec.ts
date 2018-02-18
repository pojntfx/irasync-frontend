import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCommunityStartComponent } from './navigation-community-start.component';

describe('NavigationCommunityStartComponent', () => {
  let component: NavigationCommunityStartComponent;
  let fixture: ComponentFixture<NavigationCommunityStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCommunityStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCommunityStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

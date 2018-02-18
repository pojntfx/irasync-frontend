import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCommunityComponent } from './navigation-community.component';

describe('NavigationCommunityComponent', () => {
  let component: NavigationCommunityComponent;
  let fixture: ComponentFixture<NavigationCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

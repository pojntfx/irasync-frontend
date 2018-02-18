import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommunityComponent } from './header-community.component';

describe('HeaderCommunityComponent', () => {
  let component: HeaderCommunityComponent;
  let fixture: ComponentFixture<HeaderCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

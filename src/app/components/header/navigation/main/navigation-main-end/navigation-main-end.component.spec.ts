import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMainEndComponent } from './navigation-main-end.component';

describe('NavigationMainEndComponent', () => {
  let component: NavigationMainEndComponent;
  let fixture: ComponentFixture<NavigationMainEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMainEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMainEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

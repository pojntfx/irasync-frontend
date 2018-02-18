import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMainStartComponent } from './navigation-main-start.component';

describe('NavigationMainStartComponent', () => {
  let component: NavigationMainStartComponent;
  let fixture: ComponentFixture<NavigationMainStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMainStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMainStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainEndComponent } from './footer-main-end.component';

describe('FooterMainEndComponent', () => {
  let component: FooterMainEndComponent;
  let fixture: ComponentFixture<FooterMainEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMainEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMainEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

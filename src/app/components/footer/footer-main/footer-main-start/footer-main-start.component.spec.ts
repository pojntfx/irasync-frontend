import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainStartComponent } from './footer-main-start.component';

describe('FooterMainStartComponent', () => {
  let component: FooterMainStartComponent;
  let fixture: ComponentFixture<FooterMainStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMainStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMainStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

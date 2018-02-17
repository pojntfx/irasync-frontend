import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPersonComponent } from './content-person.component';

describe('ContentPersonComponent', () => {
  let component: ContentPersonComponent;
  let fixture: ComponentFixture<ContentPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNikoComponent } from './about-niko.component';

describe('AboutNikoComponent', () => {
  let component: AboutNikoComponent;
  let fixture: ComponentFixture<AboutNikoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNikoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNikoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

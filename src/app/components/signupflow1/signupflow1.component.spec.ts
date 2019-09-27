import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signupflow1Component } from './signupflow1.component';

describe('Signupflow1Component', () => {
  let component: Signupflow1Component;
  let fixture: ComponentFixture<Signupflow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signupflow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signupflow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

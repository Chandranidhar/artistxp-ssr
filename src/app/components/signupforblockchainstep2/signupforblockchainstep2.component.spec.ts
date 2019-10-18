import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signupforblockchainstep2Component } from './signupforblockchainstep2.component';

describe('Signupforblockchainstep2Component', () => {
  let component: Signupforblockchainstep2Component;
  let fixture: ComponentFixture<Signupforblockchainstep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signupforblockchainstep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signupforblockchainstep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

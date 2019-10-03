import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupflowComponent } from './signupflow.component';

describe('SignupflowComponent', () => {
  let component: SignupflowComponent;
  let fixture: ComponentFixture<SignupflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupforblockchainconfirmationComponent } from './signupforblockchainconfirmation.component';

describe('SignupforblockchainconfirmationComponent', () => {
  let component: SignupforblockchainconfirmationComponent;
  let fixture: ComponentFixture<SignupforblockchainconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupforblockchainconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupforblockchainconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

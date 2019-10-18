import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupforblockchainComponent } from './signupforblockchain.component';

describe('SignupforblockchainComponent', () => {
  let component: SignupforblockchainComponent;
  let fixture: ComponentFixture<SignupforblockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupforblockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupforblockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationforlaunchplanComponent } from './invitationforlaunchplan.component';

describe('InvitationforlaunchplanComponent', () => {
  let component: InvitationforlaunchplanComponent;
  let fixture: ComponentFixture<InvitationforlaunchplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationforlaunchplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationforlaunchplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

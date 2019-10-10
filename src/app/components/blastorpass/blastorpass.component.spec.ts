import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastorpassComponent } from './blastorpass.component';

describe('BlastorpassComponent', () => {
  let component: BlastorpassComponent;
  let fixture: ComponentFixture<BlastorpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlastorpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlastorpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

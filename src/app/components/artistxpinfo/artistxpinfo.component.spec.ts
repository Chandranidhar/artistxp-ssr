import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistxpinfoComponent } from './artistxpinfo.component';

describe('ArtistxpinfoComponent', () => {
  let component: ArtistxpinfoComponent;
  let fixture: ComponentFixture<ArtistxpinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistxpinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistxpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

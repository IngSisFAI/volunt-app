import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDonationsComponent } from './active-donations.component';

describe('ActiveDonationsComponent', () => {
  let component: ActiveDonationsComponent;
  let fixture: ComponentFixture<ActiveDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

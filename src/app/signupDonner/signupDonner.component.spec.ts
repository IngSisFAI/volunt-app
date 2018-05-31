import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDonnerComponent } from './signupDonner.component';

describe('SignupDonnerComponent', () => {
  let component: SignupDonnerComponent;
  let fixture: ComponentFixture<SignupDonnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDonnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

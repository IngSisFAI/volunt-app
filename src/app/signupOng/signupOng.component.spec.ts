import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOngComponent } from './signupOng.component';

describe('SignupComponent', () => {
  let component: SignupOngComponent;
  let fixture: ComponentFixture<SignupOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

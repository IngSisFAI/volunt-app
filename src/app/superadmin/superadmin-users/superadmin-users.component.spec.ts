import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminUsersComponent } from './superadmin-users.component';

describe('SuperadminUsersComponent', () => {
  let component: SuperadminUsersComponent;
  let fixture: ComponentFixture<SuperadminUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

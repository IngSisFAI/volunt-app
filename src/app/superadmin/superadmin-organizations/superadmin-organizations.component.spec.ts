import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminOrganizationsComponent } from './superadmin-organizations.component';

describe('SuperadminOrganizationsComponent', () => {
  let component: SuperadminOrganizationsComponent;
  let fixture: ComponentFixture<SuperadminOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

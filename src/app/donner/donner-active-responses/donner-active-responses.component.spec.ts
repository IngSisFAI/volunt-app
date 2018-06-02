import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerActiveResponsesComponent } from './donner-active-responses.component';

describe('DonnerActiveResponsesComponent', () => {
  let component: DonnerActiveResponsesComponent;
  let fixture: ComponentFixture<DonnerActiveResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnerActiveResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerActiveResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

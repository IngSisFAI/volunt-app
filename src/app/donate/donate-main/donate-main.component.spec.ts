import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateMainComponent } from './donate-main.component';

describe('DonateComponent', () => {
  let component: DonateMainComponent;
  let fixture: ComponentFixture<DonateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

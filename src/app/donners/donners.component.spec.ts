import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnersComponent } from './donners.component';

describe('DonnersComponent', () => {
  let component: DonnersComponent;
  let fixture: ComponentFixture<DonnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

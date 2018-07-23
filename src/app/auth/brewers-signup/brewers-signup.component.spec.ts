import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewersSignupComponent } from './brewers-signup.component';

describe('BrewersSignupComponent', () => {
  let component: BrewersSignupComponent;
  let fixture: ComponentFixture<BrewersSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewersSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewersSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

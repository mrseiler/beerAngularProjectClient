import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersSignupComponent } from './drinkers-signup.component';

describe('DrinkersSignupComponent', () => {
  let component: DrinkersSignupComponent;
  let fixture: ComponentFixture<DrinkersSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

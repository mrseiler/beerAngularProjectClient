import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersLoginComponent } from './drinkers-login.component';

describe('DrinkersLoginComponent', () => {
  let component: DrinkersLoginComponent;
  let fixture: ComponentFixture<DrinkersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

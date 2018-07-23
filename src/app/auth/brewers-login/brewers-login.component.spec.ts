import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewersLoginComponent } from './brewers-login.component';

describe('BrewersLoginComponent', () => {
  let component: BrewersLoginComponent;
  let fixture: ComponentFixture<BrewersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

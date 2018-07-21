import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewersComponent } from './brewers.component';

describe('BrewersComponent', () => {
  let component: BrewersComponent;
  let fixture: ComponentFixture<BrewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

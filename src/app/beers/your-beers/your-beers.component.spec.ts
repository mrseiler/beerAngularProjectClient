import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBeersComponent } from './your-beers.component';

describe('YourBeersComponent', () => {
  let component: YourBeersComponent;
  let fixture: ComponentFixture<YourBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDialogBoxComponent } from './beer-dialog-box.component';

describe('BeerDialogBoxComponent', () => {
  let component: BeerDialogBoxComponent;
  let fixture: ComponentFixture<BeerDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserSnackbarComponent } from './update-user-snackbar.component';

describe('UpdateUserSnackbarComponent', () => {
  let component: UpdateUserSnackbarComponent;
  let fixture: ComponentFixture<UpdateUserSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

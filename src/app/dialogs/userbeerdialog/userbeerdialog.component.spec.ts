import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbeerdialogComponent } from './userbeerdialog.component';

describe('UserbeerdialogComponent', () => {
  let component: UserbeerdialogComponent;
  let fixture: ComponentFixture<UserbeerdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbeerdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbeerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

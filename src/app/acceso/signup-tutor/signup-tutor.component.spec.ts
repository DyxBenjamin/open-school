import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTutorComponent } from './signup-tutor.component';

describe('SignupTutorComponent', () => {
  let component: SignupTutorComponent;
  let fixture: ComponentFixture<SignupTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

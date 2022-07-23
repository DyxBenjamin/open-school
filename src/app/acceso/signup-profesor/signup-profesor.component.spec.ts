import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProfesorComponent } from './signup-profesor.component';

describe('SignupProfesorComponent', () => {
  let component: SignupProfesorComponent;
  let fixture: ComponentFixture<SignupProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

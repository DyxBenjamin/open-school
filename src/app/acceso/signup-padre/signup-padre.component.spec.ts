import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPadreComponent } from './signup-padre.component';

describe('SignupPadreComponent', () => {
  let component: SignupPadreComponent;
  let fixture: ComponentFixture<SignupPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

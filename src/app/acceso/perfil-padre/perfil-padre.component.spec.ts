import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPadreComponent } from './perfil-padre.component';

describe('PerfilPadreComponent', () => {
  let component: PerfilPadreComponent;
  let fixture: ComponentFixture<PerfilPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

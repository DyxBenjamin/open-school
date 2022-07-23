import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTutorialsComponent } from './teacher-tutorials.component';

describe('TutorialsComponent', () => {
  let component: TeacherTutorialsComponent;
  let fixture: ComponentFixture<TeacherTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTutorialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

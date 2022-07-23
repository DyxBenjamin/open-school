import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesComponent } from './teacher-courses.component';

describe('CoursesComponent', () => {
  let component: TeacherCoursesComponent;
  let fixture: ComponentFixture<TeacherCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

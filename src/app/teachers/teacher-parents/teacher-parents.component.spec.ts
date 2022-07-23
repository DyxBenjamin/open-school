import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherParentsComponent } from './teacher-parents.component';

describe('ParentsComponent', () => {
  let component: TeacherParentsComponent;
  let fixture: ComponentFixture<TeacherParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherParentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

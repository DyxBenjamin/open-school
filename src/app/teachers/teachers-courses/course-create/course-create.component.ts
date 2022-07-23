import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event:any) {
    event.preventDefault();
    console.log('%c << 📌 event >>', 'color: white; font-size: 12px');
    console.log(event);
  }
}

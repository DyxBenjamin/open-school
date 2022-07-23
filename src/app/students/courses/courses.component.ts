import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class StudentsCoursesComponent implements OnInit {

  courses = [
    {
      id: 13241,
      name: 'Matematicas',
      level: 'Primaria 2do grado',
    },
    {
      id: 22341,
      name: 'Historia de mexico',
      level: 'Primaria 2do grado',
    },
    {
      id: 21231,
      name: 'Geografia de mexico',
      level: 'Primaria 2do grado',
    },
    {
      id: 75542,
      name: 'Ingles basico',
      level: 'Primaria 2do grado',
    },
    {
      id: 34542,
      name: 'Español',
      level: 'Primaria 2do grado',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;  }

}

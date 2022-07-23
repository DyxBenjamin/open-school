import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-courses-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class StudentsCoursesCourseComponent implements OnInit {
  materias = [
    {
      nombre: 'Números',
    },
    {
      nombre: 'Contar',
    },
    {
      nombre: 'Sumas',
    },
    {
      nombre: 'Restas',
    },
    {
      nombre: 'Figuras geométricas',
    }
  ]

  color1 = ""
  color2 = ""

  constructor() { }

  ngOnInit(): void {
    this.color1 = this.getRandomColor();
    this.color2 = this.getRandomColor();
  }
  getRandomNum(){
    return (Math.floor(Math.random() * 10)) +1
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;  }

}

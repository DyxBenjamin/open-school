import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  courses = [
    {
      id: 13241,
      name: 'Aritmetica basica',
      level: 'Primaria 1er grado',
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
      level: 'Primaria 5to grado',
    },
    {
      id: 34542,
      name: 'Historia de mexico 2',
      level: 'Primaria 3do grado',
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

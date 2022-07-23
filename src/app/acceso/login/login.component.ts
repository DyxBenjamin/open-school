import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    const email:any = document.getElementById('email');
    if(email === 'alumno@prueba.com'){
      this.router.navigate(["/login"], {replaceUrl: true});
    } else if(email === 'profesor@prueba.com'){
      this.router.navigate(["/login"], {replaceUrl: true});
    } else if(email === 'asesor@prueba.com'){
      this.router.navigate(["/login"], {replaceUrl: true});
    } else if(email === 'padre@prueba.com'){
      this.router.navigate(["/login"], {replaceUrl: true});
    }
  }
}

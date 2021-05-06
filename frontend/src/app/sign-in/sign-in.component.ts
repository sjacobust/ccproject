import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form:FormGroup;
  passwordConfirmed:boolean = false;
  error:boolean = false;
  registerInfo: any = {
    name: "",
    email: "",
    password: ""
  };

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router, ) { 
    this.form =  this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPswd: ["", [Validators.required, Validators.minLength(8)]]
    }, {
      validators: [
        () => {
          if (!this.form) return;
          if (this.form.controls.password.value == this.form.controls.confirmPswd.value) {
            this.passwordConfirmed = true;
            return null;
          } else {
            this.passwordConfirmed = false;
            return {
              confirmPasswords: true
            }
          }
        },
      ]
    })
  }

  register() {
    console.log()
    if (this.form.valid) {
      console.log("Registering!");
      this.registerInfo = {
        Username: this.form.controls.name.value,
        Email: this.form.controls.email.value,
        Password: this.form.controls.password.value
      }
      this.userService.registerUser(this.registerInfo);
      this.router.navigate(['home'], { queryParams: { registered: 'true' } });
    } else {
      this.error = true;
    }
  }

  ngOnInit(): void {
  }

}

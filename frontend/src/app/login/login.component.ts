import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginInfo: any = {
    Email: "",
    Password: ""
  };

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  login () {
    const allUsers = this.userService.getUsers()
    console.log(allUsers);
    this.loginInfo = {
      
    }
    this.userService.loginUser(this.loginInfo)
  }

}

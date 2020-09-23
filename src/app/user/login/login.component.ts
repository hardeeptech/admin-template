import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from 'src/app/shared/userdata/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserdataService, private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    if(this.userService.getUserData() != null){
      this.router.navigateByUrl('home/dashboard')
    }
  }

  public onClick(){
    console.log(this.loginForm.value)
    alert(this.loginForm.get('username').value)
    if(this.loginForm.get('username').value == 'happy')
    {
      this.userService.setUserData(this.loginForm.get('username').value)
      this.router.navigateByUrl('home/dashboard')
    }
  }

}

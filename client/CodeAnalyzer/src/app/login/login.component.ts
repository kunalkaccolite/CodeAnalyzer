import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required]    
    })
  }
  constructor(private fb: FormBuilder, private router:Router ) {
    //private router : Router
  }

  username : string
  password : string

  login() : void {
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      this.router.navigate(["candidate-list"]);
    }
    else if(this.loginForm.value.username == 'candidate' && this.loginForm.value.password == 'candidate'){
      this.router.navigate(["dashboard"]);  
    }
    else {
      alert("Invalid credentials");
    }
  }
}

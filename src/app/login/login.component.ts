import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators,FormBuilder,NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private router:Router) { }
  username : String ;
  password : String ;
  ngOnInit(): void {
  }
  

  login(){
    if((this.username=='admin') && (this.password=='123456')){
      this.router.navigate(['/root']);
      console.log(this.username);
    }
    else{
      alert("Invalid Input");
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor( private router: Router){}
  store(){

    const name: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const pw: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    
    const email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
 
    const lowerCaseLetters: RegExp = /[a-z]/g;
    const upperCaseLetters: RegExp = /[A-Z]/g;
    const numbers: RegExp = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in Username');

    } else if (pw.value.length == 0) {
        alert('Please fill in password');

    }
   
  else if (email.value.length == 0) {
    alert('Please fill in Email');

} else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Please fill in email and password');

    } else if (pw.value.length > 8) {
        alert('Max of 8');

    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lovercase letter');

    } else {
        
       

        this.router.navigateByUrl('/signin');
    }
}
  
}
 

 

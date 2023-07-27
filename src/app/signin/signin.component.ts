import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../home/course.service';
import { ILogin } from './sign';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
 
  constructor( private router: Router,private _courseService: CourseService){}
  detail: ILogin[] = [];
  errorMessage: any;
  ngOnInit(): void {
    // this.courses = this._courseService.getCourses();
    // this.searchTxt = "";
    // this.searchedCourses=this.courses;

    this.subs();
  }
   subs() : void {
    this._courseService.getCreds().subscribe({
      next: details => {
        this.detail = details;
        
      },
      error: err => this.errorMessage = err
    })
  }

  onsubmit(){
    
   
     const userName: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
     const userPw: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
     
 
     if (userName.value == "details.getCreds()" && userPw.value.length != 0) {
       this.router.navigateByUrl('/home')
     } else {
         alert('Error on login Please Try Again');
     }
   }
  
}

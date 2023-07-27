import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContractComponent } from './contract/contract.component';
import { ErrorComponent } from './error/error.component';
import { CourseDescComponent } from './course-desc/course-desc.component';
import { CoursesComponent } from './courses/courses.component';
import { SigninComponent } from './signin/signin.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contract',
    component:ContractComponent
  },
  {
    path:'view/:id',
    component:CourseDescComponent
  },
  {
    path:'course',
    component:CoursesComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'video',
    component:VideosComponent
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

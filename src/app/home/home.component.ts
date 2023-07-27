import { Component } from '@angular/core';
import { ICourses } from './courses';
import { CourseService } from './course.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  private _searchTxt: string = '';
  searchedCourses: ICourses[] = [];
 RatingCourses: ICourses[] = [];
  filterCourse:ICourses[]=[];
  newCourse:ICourses[]=[];
  courses: ICourses[] = [];
  errorMessage: any;
  sub!: Subscription;
  get searchTxt(): string {
    return this._searchTxt;
  }
  issearch: boolean = false;
  set searchTxt(value: string) {
    this._searchTxt = value;
    console.log('setter', value);
    this.searchedCourses = this.Searching(value);
    console.log(this.searchedCourses);
  }

  constructor(private _courseService: CourseService) {

  }

  isSeacrhed() {
    this.issearch = !this.issearch;

    console.log(this.issearch);
  }
  ngOnInit(): void {
    // this.courses = this._courseService.getCourses();
    // this.searchTxt = "";
    // this.searchedCourses=this.courses;

    this.subs();
  }
   subs() : void {
    this._courseService.getCourses().subscribe({
      next: courses => {
        this.courses = courses;
        this.searchedCourses = this.courses;
      },
      error: err => this.errorMessage = err
    })
  }
  addCourse(): void {
    this._courseService.addcourse(this.newCourse).subscribe(() => {
     
      this.subs();
    });
  }

  filterCourses(filter: string) {
    console.log({ filter })
    // this.searchedCourses.filter(course: ICourses) => this.searchedCourses = courses.filter((course: ICourses) => course.courseCategory === filter))
    if(filter=='ALL')
    {
      this.searchedCourses=this.courses;
    }
    else{
    this.filterCourse=this.courses;
    this.searchedCourses= this.filterCourse;
    this.searchedCourses = this.searchedCourses.filter((course: ICourses) => course.courseCategory === filter)}
  }
  Searching(searchBy: string): ICourses[] {

    searchBy = searchBy.toLocaleLowerCase();
    return this.courses.filter((c: ICourses) =>
      c.courseName.toLocaleLowerCase().includes(searchBy));

  }
  SortbyR(){
    this.RatingCourses=this.courses;
    this.searchedCourses= this.RatingCourses;
    this.searchedCourses = this.searchedCourses.sort((a:ICourses, b:ICourses)=> b.courseRating - a.courseRating);
  }
}

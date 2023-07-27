import { Component } from '@angular/core';
import { ICourses } from '../home/courses';
import { CourseService } from '../home/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  private _searchTxt: string = '';
  searchedCourses: ICourses[] = [];
 RatingCourses: ICourses[] = [];
  filterCourse:ICourses[]=[];
  newCourse:ICourses[]=[];
  courses: ICourses[] = [];
  errorMessage: any;
  sub!: Subscription;
  filterClicked: any;
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
  SortbyRd(){
    this.RatingCourses=this.courses;
    this.searchedCourses= this.RatingCourses;
    this.searchedCourses = this.searchedCourses.sort((a:ICourses, b:ICourses)=> b.courseRating - a.courseRating);
  }
  SortbyRa(){
    this.RatingCourses=this.courses;
    this.searchedCourses= this.RatingCourses;
    this.searchedCourses = this.searchedCourses.sort((a:ICourses, b:ICourses)=> a.courseRating - b.courseRating);
  }
  SortbyPd(){
    this.RatingCourses=this.courses;
    this.searchedCourses= this.RatingCourses;
    this.searchedCourses = this.searchedCourses.sort((a:ICourses, b:ICourses)=> b.coursePrice - a.coursePrice);
  }
  SortbyPa(){
    this.RatingCourses=this.courses;
    this.searchedCourses= this.RatingCourses;
    this.searchedCourses = this.searchedCourses.sort((a:ICourses, b:ICourses)=> a.coursePrice - b.coursePrice);
  }
  resetFilter(){
   console.log('Function Hitss')
    this.searchedCourses=this.courses;
  }
  handleFilter(filter: string) {
    console.log("handle filter called")
    this.filterClicked.emit(filter);
  }
} 

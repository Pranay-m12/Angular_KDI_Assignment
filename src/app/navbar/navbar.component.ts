import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ICourses } from '../home/courses';
import { CourseService } from '../home/course.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() hideCategory!: Boolean

  @Input() hideabout !: Boolean
  @Output() filterClicked = new EventEmitter<string>();

  handleFilter(filter: string) {
    console.log("handle filter called")
    this.filterClicked.emit(filter);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescComponent } from './course-desc.component';

describe('CourseDescComponent', () => {
  let component: CourseDescComponent;
  let fixture: ComponentFixture<CourseDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDescComponent]
    });
    fixture = TestBed.createComponent(CourseDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from "@angular/core";
import { ICourses } from "./courses";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { ILogin } from "../signin/sign";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private courseUrl = 'api/courses/course.json';
    private loginUrl = 'api/login/login.json';

    constructor(private http: HttpClient) { }

    getCourses(): Observable<ICourses[]> {
        return this.http.get<ICourses[]>(this.courseUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)

        );
    }
   
    getCreds(): Observable<ILogin[]> {
        return this.http.get<ILogin[]>(this.loginUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)

        );
    }
    addcourse(course : any): Observable<ICourses[]>{
        return this.http.post<any>(this.courseUrl, course);
    }


    private handleError(err: HttpErrorResponse) {
        let errorMsg = "";
        if (err.error instanceof ErrorEvent) {
            errorMsg = `An error Occured : ${err.error.message}`;
        }
        else {
            errorMsg = `Else`;
        }
        return throwError(() => errorMsg);
    }
}
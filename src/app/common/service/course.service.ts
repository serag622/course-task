import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCourseList(): Observable<{ Courses: Course[] }> {
    return this.http.get<{ Courses: Course[] }>(
      `${this.baseUrl}983f88db4d99fec8edd9`
    );
  }

  getCourseCategory(): Observable<{ Categories: Category[] }> {
    return this.http.get<{ Categories: Category[] }>(
      `${this.baseUrl}8378472d08789a9cb165`
    );
  }
}

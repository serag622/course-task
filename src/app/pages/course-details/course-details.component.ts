import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Course } from '../../common/model/course.model';
import { PageHeaderComponent } from '../../common/components/page-header/page-header.component';

@Component({
  selector: 'app-course-details',
  imports: [PageHeaderComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course = signal<Course>({
    id: '',
    hours: 0,
    image: '',
    level: '',
    price: 0,
    title: '',
    author: '',
    category: '',
    discount: 0,
    lectures: 0,
    addToCart: false,
    categoryID: 0,
    description: '',
    ratingCount: 0,
    showOnHomepage: false,
  });

  ngOnInit(): void {
    this.getCourseDetails();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('course');
  }

  getCourseDetails() {
    const data = localStorage.getItem('course');
    if (data) {
      this.course.set(JSON.parse(data));
    } else {
      history.back();
    }
  }
}

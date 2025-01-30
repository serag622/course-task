import { Component, inject, OnInit, signal } from '@angular/core';
import { PageHeaderComponent } from '../../common/components/page-header/page-header.component';
import { CourseService } from '../../common/service/course.service';
import { Course } from '../../common/model/course.model';
import { CourseCardComponent } from '../../common/components/course-card/course-card.component';
import { SearchInputComponent } from '../../common/components/search-input/search-input.component';
import { LoaderComponent } from "../../common/components/loader/loader.component";

@Component({
  selector: 'app-course-list',
  imports: [PageHeaderComponent, CourseCardComponent, SearchInputComponent, LoaderComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
})
export class CourseListComponent implements OnInit {
  courseService = inject(CourseService);
  isLoading = signal<boolean>(false);
  courseList = signal<Course[]>([]);
  filiteredList = signal<Course[]>([]);

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList() {
    this.isLoading.set(true);
    this.courseService.getCourseList().subscribe((data) => {
      this.courseList.set(data.Courses);
      this.filiteredList.set(this.courseList());
      this.isLoading.set(false);
    });
  }

  search(value: string) {
    if (value) {
      const data = this.courseList().filter((c) => c.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      this.filiteredList.set(data);
    } else {
      this.filiteredList.set(this.courseList());
    }
  }
}

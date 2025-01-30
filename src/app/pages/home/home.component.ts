import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../../common/service/home.service';
import { Banner } from '../../common/model/banner.model';
import { BannerComponent } from './banner/banner.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { CourseService } from '../../common/service/course.service';
import { Category } from '../../common/model/category.model';
import { Course } from '../../common/model/course.model';
import { CourseCardComponent } from '../../common/components/course-card/course-card.component';
import { LoaderComponent } from '../../common/components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    JoinUsComponent,
    CourseCardComponent,
    LoaderComponent,
    FormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  courseService = inject(CourseService);
  homeService = inject(HomeService);
  bannerList = signal<Banner[]>([]);
  courseCategoryList = signal<Category[]>([]);
  isLoading = signal<boolean>(false);
  courseList = signal<Course[]>([]);
  filiteredList = signal<Course[]>([]);
  selectedCategory = "0" 

  ngOnInit(): void {
    this.getBannerList();
    this.getCategoryList();
    this.getCourseList();
  }

  getBannerList() {
    this.homeService.getBannerList().subscribe((res) => {
      this.bannerList.set(res.banners.sort((a, b) => a.order - b.order));
    });
  }

  getCourseList() {
    this.isLoading.set(true);
    this.courseService.getCourseList().subscribe((data) => {
      const homeData = data.Courses.filter((c) => c.showOnHomepage);
      this.courseList.set(homeData);
      this.filiteredList.set(this.courseList());
      this.isLoading.set(false);
    });
  }

  getCategoryList() {
    this.courseService.getCourseCategory().subscribe((res) => {
      this.courseCategoryList.set(res.Categories);
    });
  }

  changeCategory($event : string){

  }
}

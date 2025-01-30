import { Component, inject, input } from '@angular/core';
import { Course } from '../../model/course.model';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [NgClass],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  router = inject(Router);
  course = input.required<Course>();

  showDetails() {
    localStorage.setItem('course', JSON.stringify(this.course()));
    this.router.navigate(['/course-details']);
  }
}

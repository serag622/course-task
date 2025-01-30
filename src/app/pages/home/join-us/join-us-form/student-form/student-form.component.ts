import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../../../../common/model/category.model';
import { CourseService } from '../../../../../common/service/course.service';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss',
})
export class StudentFormComponent {
  fb = inject(FormBuilder);
  courseCategoryList = input<Category[]>([]);
  isStudentFormSubmited = signal<boolean>(false);
  studentForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    college: ['', [Validators.required]],
    courseCategory: ['', [Validators.required]],
    courseLevel: ['', [Validators.required]],
  });

  submit() {
    if (this.studentForm.valid) {
      this.isStudentFormSubmited.set(true);
    } else {
    }
  }
}

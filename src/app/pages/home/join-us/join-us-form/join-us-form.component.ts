import { KeyValuePipe, NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Category } from '../../../../common/model/category.model';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { StudentFormComponent } from './student-form/student-form.component';

enum JoinUsFormTypes {
  Instructor = 'INSTRUCTOR',
  Student = 'STUDENT',
}

@Component({
  selector: 'app-join-us-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    KeyValuePipe,
    NgClass,
    InstructorFormComponent,
    StudentFormComponent,
  ],
  templateUrl: './join-us-form.component.html',
  styleUrl: './join-us-form.component.scss',
})
export class JoinUsFormComponent {
  courseCategoryList = input<Category[]>([]);
  joinUsFormTypes = JoinUsFormTypes;
  formType = 'INSTRUCTOR';
}

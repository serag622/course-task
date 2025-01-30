import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../../../../common/model/category.model';
import { InputComponent } from '../../../../../common/components/input/input.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, InputComponent, NgClass],
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
    phone: ['', [Validators.required]],
    college: ['', [Validators.required]],
    courseCategory: ['', [Validators.required]],
  });

  controlName() {
    return this.studentForm?.controls['courseCategory'];
  }

  submit() {
    if (this.studentForm.valid) {
      this.isStudentFormSubmited.set(true);
    } else {
      Object.values(this.studentForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}

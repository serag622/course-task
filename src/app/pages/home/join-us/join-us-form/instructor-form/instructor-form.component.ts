import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructor-form',
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-form.component.html',
  styleUrl: './instructor-form.component.scss',
})
export class InstructorFormComponent {
  fb = inject(FormBuilder);
  isInstructorFormSubmited = signal<boolean>(false);
  instructorForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zipcode: ['', [Validators.required]],
  });

  submit() {
    if (this.instructorForm.valid) {
      this.isInstructorFormSubmited.set(true);
    } else {
    }
  }
}

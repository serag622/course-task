import { CommonModule, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  formGroup = input.required<FormGroup>();
  inputFormControlName = input.required<string>();
  required = input<boolean>(false);
  inputType = input<string>('text');
  lable = input<string>('');
  placeholder = input<string>('');

  controlName() {
    return this.formGroup()?.controls[this.inputFormControlName()];
  }
}

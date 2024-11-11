import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void{this.contactForm = this.fb.group({
        name:['',Validators.required],
        email:['',[Validators.required, Validators.email]],
        queries:['',Validators.required],
        date:[''],
        phone:['',Validators.required, Validators.pattern(/^[0-9]{10}$/)],
        country:['']
    });}


  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}

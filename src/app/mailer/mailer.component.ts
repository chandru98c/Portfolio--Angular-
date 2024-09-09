import { social_links } from './../shared/app-constants';
import { Component, AfterViewInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mailer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]  ,
  templateUrl: './mailer.component.html',
  styleUrl: './mailer.component.css'
})
export class MailerComponent implements AfterViewInit{
  success: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient) {}



  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Using dynamic import for ScrollReveal
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        sr.reveal('.head-animation', {
          duration: 500,
          opacity: 0,

          origin: 'bottom',
          distance: '100px',
        });

        sr.reveal('.content-animation', {
          duration: 500,
          opacity: 0,
delay: 400,
          origin: 'left',
          distance: '250px',
          scale: 0,
        });


        sr.reveal('.mailer-box', {
          duration: 900,
          opacity: 0,
          origin: 'bottom',
          distance: '100px',
          scale: 0.6,
        });



      });
    }
  }













  formSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all the required fields.');
      return;
    }

    const email = form.value['email'];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('message', form.value.message);

    this.http.post('https://getform.io/f/blljgygb', formData, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
        form.resetForm();
      },
      error: () => {
        this.error = true;
        this.success = false;
      }
    });
  }
social_links = social_links;
}

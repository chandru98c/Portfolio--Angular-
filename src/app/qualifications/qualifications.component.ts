import { CommonModule } from '@angular/common';
import {
  Certificate,
  Education,
  qualification,
  social_links,
  capabalities,
} from './../shared/app-constants';
import { RouterModule } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css',
})
export class QualificationsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        sr.reveal('.head-animation', {
          duration: 500,
          opacity: 0,
          reset: true,
          origin: 'bottom',
          distance: '100px',
        });

        sr.reveal('.content-animation', {
          duration: 500,
          opacity: 0,
          delay: 200,
          origin: 'left',
          distance: '400px',
          scale: 0,
          reset: true,
        });

        sr.reveal('.img-box', {
          duration: 500,
          opacity: 0,
          origin: 'bottom',
          distance: '100px',
          scale: 0.6,
        });
      });
    }
  }

  Certificate = Certificate;
  Education = Education;
  qualification = qualification;
  social_links = social_links;
  capabalities = capabalities;
}

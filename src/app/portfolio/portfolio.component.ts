import { CommonModule } from '@angular/common';

import { projects } from '../shared/app-constants';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        const commonConfig = {
          duration: 500,
          opacity: 0,
          origin: 'bottom',
          distance: '100px',
          scale: 0.2,
        };

        const isMobile = window.innerWidth < 768;

        if (isMobile) {
          sr.reveal(
            '.pop-up-animation, .pop-up-animation1, .pop-up-animation2, .pop-up-animation3, .pop-up-animation4, .pop-up-animation5, .pop-up-animation6',
            {
              ...commonConfig,
              delay: 250,
            }
          );
        } else {
          sr.reveal('.pop-up-animation', { ...commonConfig, delay: 200 });
          sr.reveal('.pop-up-animation1', { ...commonConfig, delay: 200 });
          sr.reveal('.pop-up-animation2', { ...commonConfig, delay: 300 });
          sr.reveal('.pop-up-animation3', { ...commonConfig, delay: 400 });
          sr.reveal('.pop-up-animation4', { ...commonConfig, delay: 300 });
          sr.reveal('.pop-up-animation5', { ...commonConfig, delay: 400 });
          sr.reveal('.pop-up-animation6', { ...commonConfig, delay: 500 });
        }

        sr.reveal('.portfolio-text-animation', {
          duration: 500,
          delay: 350,
          opacity: 1,
          scale: 0,
        });
      });
    }
  }

  projects = projects;
}

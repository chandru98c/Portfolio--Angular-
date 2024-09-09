import { bio } from './../shared/app-constants';
import { Component, AfterViewInit } from '@angular/core';
import { Home } from './../shared/app-constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
})
export class BioComponent implements AfterViewInit {
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
            '.pop-up-animation, .pop-up-animation1, .pop-up-animation2, .pop-up-animation3, .pop-up-animation4',
            {
              ...commonConfig,
              delay: 150,
            }
          );
        } else {
          sr.reveal('.pop-up-animation', { ...commonConfig, delay: 100 });
          sr.reveal('.pop-up-animation1', { ...commonConfig, delay: 150 });
          sr.reveal('.pop-up-animation2', { ...commonConfig, delay: 200 });
          sr.reveal('.pop-up-animation3', { ...commonConfig, delay: 250 });
          sr.reveal('.pop-up-animation4', { ...commonConfig, delay: 300 });
        }

        sr.reveal('.hero-animation', {
          duration: 500,
          delay: 0,
          opacity: 1,
          origin: 'top',
          distance: '100px',
          scale: 0,
        });

        // Tag-hole animation
        sr.reveal('.bio-text-animation', {
          duration: 500,
          delay: 350,
          opacity: 1,
          scale: 0,
        });
      });
    }
  }

  bio = bio;
  home = Home;
}

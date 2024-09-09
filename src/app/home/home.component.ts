import { Component, AfterViewInit } from '@angular/core';
import { Home, social_links } from '../shared/app-constants';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

declare let window: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Ensure this file includes the initial opacity styles
})
export class HomeComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Using dynamic import for ScrollReveal
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        // Common settings for most animations
        const commonConfig = {
          duration: 500,
          opacity: 0,
          origin: 'bottom',
          distance: '100px',
          scale: 0.2,
        };

        const isMobile = window.innerWidth < 768; // Define mobile screen width (768px or less)

        if (isMobile) {
          // For mobile view, set the same delay for all pop-up animations
          sr.reveal('.pop-up-animation, .pop-up-animation1, .pop-up-animation2, .pop-up-animation3, .pop-up-animation4', {
            ...commonConfig,
            delay: 350,
          });
        } else {
          // For larger screens, apply different delays
          sr.reveal('.pop-up-animation', { ...commonConfig, delay: 400 });
          sr.reveal('.pop-up-animation1', { ...commonConfig, delay: 450 });
          sr.reveal('.pop-up-animation2', { ...commonConfig, delay: 500 });
          sr.reveal('.pop-up-animation3', { ...commonConfig, delay: 550 });
          sr.reveal('.pop-up-animation4', { ...commonConfig, delay: 600 });
        }

        // Tag and Hero animations (same across all screens)
        sr.reveal('.tag-animation', {
          duration: 500,
          delay: 350,
          opacity: 1,
          origin: 'top',
          distance: '100px',
          scale: 0,
        });

        sr.reveal('.hero-animation', {
          duration: 500,
          delay: 0,
          opacity: 1,
          origin: 'top',
          distance: '100px',
          scale: 0,
        });

        // Tag-hole animation
        sr.reveal('.tag-hole-animation', {
          duration: 500,
          delay: 350,
          opacity: 1,
          scale: 0,
        });

        // Circular text animation with rotation
        sr.reveal('.circular-text', {
          duration: 550,
          delay: 650,
          opacity: 0,
          scale: 0,
          rotate: {
            z: 20000,
          },
        });
      });
    }
  }

  homeData = Home;
  social_links = social_links;
  onSocialIconClick(event: Event): void {
    event.stopPropagation(); // Prevents the click event from bubbling up
  }
}

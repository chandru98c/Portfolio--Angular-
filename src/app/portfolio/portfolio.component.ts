import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from '../shared/app-constants';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = projects;
}

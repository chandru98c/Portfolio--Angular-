import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { social_links } from '../shared/app-constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  social_links = social_links;
}

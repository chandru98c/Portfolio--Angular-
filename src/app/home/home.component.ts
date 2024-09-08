
import { Component } from '@angular/core';
import { Home, social_links } from '../shared/app-constants';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {








  homeData = Home;
  social_links = social_links;
  onSocialIconClick(event: Event): void {
    event.stopPropagation();  // Prevents the click event from bubbling up
  }


}

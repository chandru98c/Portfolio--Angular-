import { bio } from './../shared/app-constants';
import { Component } from '@angular/core';
import { Home } from './../shared/app-constants';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {
  bio = bio;
  home = Home;
}

import { CommonModule } from '@angular/common';
import { Certificate, Education, qualification, social_links, capabalities} from './../shared/app-constants';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css'
})
export class QualificationsComponent {
 Certificate = Certificate;
 Education = Education;
 qualification = qualification;
 social_links = social_links;
 capabalities = capabalities;
}

import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { MailerComponent } from './mailer/mailer.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
{path:'', component:HomeComponent},
{path:'bio', component:BioComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'qualifications', component:QualificationsComponent},
{path:'message', component:MailerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

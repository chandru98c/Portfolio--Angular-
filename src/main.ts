import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Function to hide loading spinner
function hideLoadingSpinner(): void {
  const spinner = document.getElementById('loading-spinner') as HTMLElement;
  if (spinner) {
    spinner.style.display = 'none';
  }
  const appRoot = document.querySelector('app-root') as HTMLElement;
  if (appRoot) {
    appRoot.style.display = 'block';
  }
}

// Show the loading spinner initially
const spinner = document.getElementById('loading-spinner') as HTMLElement;
if (spinner) {
  spinner.style.display = 'block';
}

// Bootstrap the Angular application
bootstrapApplication(AppComponent, appConfig)
  .then(() => {

    hideLoadingSpinner();
  })
  .catch((err) => console.error('Bootstrap error:', err));

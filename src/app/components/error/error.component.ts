import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorDetails } from 'src/app/models/error-details';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  errorDetails: ErrorDetails;
  constructor(private router: Router) {
    this.errorDetails = this.router?.getCurrentNavigation()?.extras?.state?.['errorData'];
  }
}

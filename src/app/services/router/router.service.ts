import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ERROR_STEP, MOVIES_LIST_STEP } from 'src/app/models/routes';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  navigateTo(url: string, extras = {}): void {
    this.router.navigate([url], extras);
  }

  navigateBack(): void {
    this.location.back();
  }

  navigateToError(error): void {
    this.location.replaceState(MOVIES_LIST_STEP.url);
    this.router.navigate([ERROR_STEP.url], {
      state: { errorData: error },
      relativeTo: this.route,
      skipLocationChange: true
    });
  }
}

import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

// Global error handler
@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor(private router: Router) {}

  // Main error handling method, determines what the error is
  handleError(error: any): void {
    if (error.response) {
      this.handleHTTPError(error);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  // Contains logic for handling http errors from butter cms
  handleHTTPError(error: any) {
    switch (error.response.status) {
      case 404:
          this.router.navigate(['error', '404']);
        break;
      default:
          this.router.navigateByUrl('/');
    }
  }
}

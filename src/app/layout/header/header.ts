import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  pageTitle: string = 'ALS Dashboard';

  constructor(private router: Router) {
    // Update page title based on current route
    this.updatePageTitle();
  }

  private updatePageTitle(): void {
    const currentRoute = this.router.url;

    if (currentRoute.includes('dashboard')) {
      this.pageTitle = 'Dashboard';
    } else if (currentRoute.includes('users')) {
      this.pageTitle = 'User Management';
    } else if (currentRoute.includes('products')) {
      this.pageTitle = 'Products';
    } else if (currentRoute.includes('analytics')) {
      this.pageTitle = 'Analytics';
    } else if (currentRoute.includes('settings')) {
      this.pageTitle = 'Settings';
    } else if (currentRoute.includes('reports')) {
      this.pageTitle = 'Reports';
    } else {
      this.pageTitle = 'ALS Dashboard';
    }
  }
}

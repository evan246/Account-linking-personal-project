import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  exact?: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
  imports: [CommonModule, MatIconModule],
})
export class Sidenav {
  profileImage = 'https://i.pravatar.cc/150?img=3';
  profileName = 'Victor Kennedy';
  menuItems = [
    {
      icon: 'credit_card',
      title: 'Card Request',
      route: '/card-request',
      exact: true,
    },
    {
      icon: 'support_agent',
      title: 'Customer Service',
      route: '/customer-service',
      exact: true,
    },
    {
      icon: 'credit_card',
      title: 'Card Inventory',
      route: '/card-inventory',
      exact: true,
    },
    { icon: 'settings', title: 'Settings', route: '/settings', exact: true },
  ];

  constructor(private router: Router) {}

  isActive(route: string, exact?: boolean): boolean {
    if (exact) {
      return this.router.url === route;
    }
    return this.router.url.startsWith(route);
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}

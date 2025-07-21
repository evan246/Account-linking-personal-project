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
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
  imports: [CommonModule, MatIconModule],
})
export class Sidenav {
  profileImage =
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1';
  profileName = 'Victor Kennedy';

  menuItems: MenuItem[] = [
    {
      id: 'cards-request',
      title: 'Card Requests',
      icon: 'credit_card',
      route: '/card-request',
      expanded: false,
      children: [
        {
          id: 'card-request-child',
          title: 'Card Request',
          icon: '',
          route: '/card-request',
        },
        {
          id: 'pre-personalised-linked',
          title: 'Pre-Personalised',
          icon: '',
          route: '/card-request/pre-personalised-linked-card-record',
        },
        {
          id: 'instant-card-issuance',
          title: 'Instant Issuance',
          icon: '',
          route: '/card-request/instant-card-issuance-record',
        },
      ],
    },
    {
      id: 'card-activation',
      title: 'Card Activation',
      icon: 'check_circle',
      route: '/card-inventory/card-activation',
    },
    {
      id: 'cards-inventory',
      title: 'Cards Inventory',
      icon: 'inventory',
      route: '/card-inventory',
    },
    {
      id: 'reporting-audit',
      title: 'Report & Audit',
      icon: 'assignment',
      route: '/card-inventory/reporting-audit',
      exact: true,
    },
  ];

  constructor(private router: Router) {}

  navigateToRoute(item: MenuItem) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    } else {
      this.router.navigate([item.route]);
    }
  }

  navigateToChildRoute(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string, exact?: boolean): boolean {
    if (exact) {
      return this.router.url === route;
    }
    return this.router.url.startsWith(route);
  }

  isChildActive(parentRoute: string): boolean {
    return this.router.url.startsWith(parentRoute);
  }
}

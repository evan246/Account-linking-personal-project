import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidenav } from '../sidenav/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [Sidenav, RouterModule],
  templateUrl: './layout-main.html',
  styleUrl: './layout-main.scss',
})
export class LayoutMain {
  currentPageTitle!: '';
}

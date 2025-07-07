import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing-module';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidenav } from './sidenav/sidenav';
import { LayoutMain } from './layout-main/layout-main';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [Header, Footer],
  imports: [CommonModule, LayoutRoutingModule, RouterModule, MatIconModule],
})
export class LayoutModule {}

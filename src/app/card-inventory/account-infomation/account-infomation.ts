import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-infomation',
  imports: [],
  templateUrl: './account-infomation.html',
  styleUrl: './account-infomation.scss',
})
export class Account implements OnInit {
  user: any;
  loading = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.user = history.state.user;
  }
}

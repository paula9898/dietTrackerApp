import { Component, OnInit } from '@angular/core';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private storageService: StorageService,
    private cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  onLogout() {
    this.storageService.logOut();
    this.cookiesService.delete('<new-session>', '/', 'localhost', true, 'None');
  }
}

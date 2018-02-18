import { Component, OnInit } from '@angular/core';

/**
 * User/Profile management. Notifications and bookmarks may be
 * managed here and a log out option is provided
 */
@Component({
  selector: 'isf-navigation-main-end-menu-user',
  templateUrl: './navigation-main-end-menu-user.component.html',
  styleUrls: ['./navigation-main-end-menu-user.component.scss']
})
export class NavigationMainEndMenuUserComponent implements OnInit {

  // Whether the user is logged in (Whether the user menu or a signup/signin button should be displayed)
  private userIsLoggedIn: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

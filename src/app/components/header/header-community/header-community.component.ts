// Enable data binding
import { Component, OnInit, Input } from '@angular/core';
/**
 * Display's the current community's metadata (Title, subtitle etc.)
 * Will in the future (see mockups) also enable subscription, post event handling and a background image
 */
@Component({
  selector: 'isf-header-community',
  templateUrl: './header-community.component.html',
  styleUrls: ['./header-community.component.scss']
})
export class HeaderCommunityComponent implements OnInit {

  // Community's title and subtitle in Jumbotron
  @Input() communityName;
  @Input() communitySubtitle;

  constructor() { }

  ngOnInit() {
  }

}
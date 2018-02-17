// Enable data binding
import { Component, OnInit, Input } from '@angular/core';

/**
 * Display's the current community's metadata (Title, subtitle etc.)
 * Will in the future (see mockups) also enable subscription, post event handling and a background image
 */
@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss'],
})
export class CommunityHeaderComponent implements OnInit {

  // Community's title and subtitle in Jumbotron
  @Input() communityName;
  @Input() communitySubtitle;

  constructor() { }

  ngOnInit() {
  }

}

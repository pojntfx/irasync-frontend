import { Component, OnInit } from '@angular/core';
// Enable the route parameter fetching
import { ActivatedRoute, ParamMap } from '@angular/router';

/**
 * A community page. Contains posts, files, apps, wikis a header and a lot more!
 */
@Component({
  selector: 'isf-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  // Mock data for the community's header
  private communityName: string;
  private communitySubtitle: String = 'High Tech, Low Life';

  constructor(private route: ActivatedRoute) { }

  // Subscribe to the router service and update the name if it changes (i.e. when navigating)
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.communityName = params.get('name')
    );
  }

}

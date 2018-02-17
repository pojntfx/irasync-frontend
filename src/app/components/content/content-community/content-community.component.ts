import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-content-community',
  templateUrl: './content-community.component.html',
  styleUrls: ['./content-community.component.scss']
})
export class ContentCommunityComponent implements OnInit {

  private communityName: string;
  private communitySubtitle: String = 'High Tech, Low Life';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.communityName = params.get('name')
    );
  }

}

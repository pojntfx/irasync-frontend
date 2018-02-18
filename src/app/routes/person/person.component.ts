import { Component, OnInit } from '@angular/core';

/**
 * Will be the person compontent at some point in time. Like a community, but
 * centered around a person and also moderated by only one
 */
@Component({
  selector: 'isf-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

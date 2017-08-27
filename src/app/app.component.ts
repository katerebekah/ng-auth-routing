import { Component, OnInit } from '@angular/core';

import { SecurityService } from './security/security.service';

import { ListItem } from './list/listitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private securityService: SecurityService){}

  ngOnInit() {
    this.securityService.getList()
      .then((list) => {
        this.list = list;
      });
  }

  title = 'app';
  list: Array<ListItem>;
}

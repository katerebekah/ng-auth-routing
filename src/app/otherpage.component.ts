import { Component } from '@angular/core';

@Component({
  selector: 'other-page',
  template: '<p>This is the Other page</p><h1>{{title}}</h1>'
})
export class OtherpageComponent {
    title: string = "YOLO"
}

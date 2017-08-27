import { Component } from '@angular/core';

@Component({
  selector: 'sub-page',
  template: '<p>This is the Subpage</p><h1>{{title}}</h1>'
})
export class SubpageComponent {
    title: string = "YOLO"
}

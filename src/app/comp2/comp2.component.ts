import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'comp2',
  template: `<button (click)="trigger()">触发订阅事件</button>`
})
export class Comp2Component {
  constructor(private appService: AppService) {

  }

  trigger(): void {
    let isRan = Math.random() > .5;
    let text = isRan ? '你说呢' : 'ok吧'
    this.appService.setComp1Text(text);
    console.log('appService', text);
  }
}
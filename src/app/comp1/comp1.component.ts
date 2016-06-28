import { Component, OnDestroy } from '@angular/core';

import { Subscription }   from 'rxjs/Subscription';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'comp1',
  template: `<p>this is current Text: {{text}}</p>`
})
export class Comp1Component implements OnDestroy {
  text: string = 'init value';

  subscription: Subscription;

  constructor(private appService: AppService) {
    this.subscription = appService.comp1Text$.subscribe(
      text => {
        this.text = text;
        console.log('subscribe trigger', text);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
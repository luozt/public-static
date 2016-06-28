import { Component } from '@angular/core';

// import { AppService } from './app/app.service';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  template: `
    <comp1></comp1>
    <comp2></comp2>
  `,
  directives: [Comp1Component, Comp2Component]
  // , providers: [AppService]
})
export class AppComponent{}
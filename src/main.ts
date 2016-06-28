
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { AppService } from './app/app.service';

bootstrap(AppComponent, [
  AppService
]);

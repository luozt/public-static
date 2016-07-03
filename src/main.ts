import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './app/app.component';

if('lc' === window.NODE_ENV){
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
]);

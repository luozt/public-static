import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AppService {
  // Observable string sources
  private comp1TextSource = new Subject<string>();

  // Observable string streams
  comp1Text$ = this.comp1TextSource.asObservable();

  // Service message commands
  setComp1Text(text: string) {
    this.comp1TextSource.next(text);
  }
}

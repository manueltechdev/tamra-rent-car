import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[titanSubtotalBody]',
  host: {
    class: 'body-content'
  }
})
export class SubtotalBodyDirective {

  constructor(public element: ElementRef<SubtotalBodyDirective>) {
  }
}

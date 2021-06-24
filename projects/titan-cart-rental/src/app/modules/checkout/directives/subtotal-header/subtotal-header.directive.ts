import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[titanSubtotalHeader]'
})
export class SubtotalHeaderDirective {
  @Input() last!: boolean;

  constructor(public element: ElementRef<SubtotalHeaderDirective>) {
  }




}

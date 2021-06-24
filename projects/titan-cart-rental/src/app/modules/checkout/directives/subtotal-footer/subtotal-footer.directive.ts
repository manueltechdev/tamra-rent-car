import {AfterViewInit, ContentChild, Directive, ElementRef, ViewChild} from '@angular/core';
import {SubtotalResultComponent} from '../../components/subtotal-result/subtotal-result.component';

@Directive({
  selector: '[titanSubtotalFooter]',
  host: {
    style: 'display: flex; justify-content: space-between; align-items: center',
  }
})
export class SubtotalFooterDirective {

  @ContentChild(SubtotalResultComponent) test: SubtotalResultComponent;

  constructor(private el: ElementRef<SubtotalFooterDirective>) {
  }


}

import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {SubtotalHeaderDirective} from '../../directives/subtotal-header/subtotal-header.directive';
import {SubtotalBodyDirective} from '../../directives/subtotal-body/subtotal-body.directive';

@Component({
  selector: 'titan-sub-total-card',
  templateUrl: './sub-total-card.component.html',
  styleUrls: ['./sub-total-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubTotalCardComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(SubtotalHeaderDirective, {descendants: true})
  headerDirective: QueryList<SubtotalHeaderDirective>;

  @ContentChildren(SubtotalBodyDirective, {descendants: true})
  bodyDirective: QueryList<SubtotalBodyDirective>;



  constructor(private renderer2: Renderer2) {
  }

  ngOnInit(): void {
  }


  ngAfterContentInit(): void {
    this.headerDirective.toArray()
      .forEach(it => {
        if (!it.last) {
          this.renderer2.addClass(it.element.nativeElement, 'header-border-subtotal');
        } else {
          this.renderer2.setStyle(it.element.nativeElement, 'flex', '35%');
        }
        this.renderer2.addClass(it.element.nativeElement, 'margin-0-20');

      });
    this.bodyDirective.toArray()
      .forEach(it => {
          this.renderer2.addClass(it.element.nativeElement, 'body-padding-subtotal');
      });
  }

  ngAfterViewInit(): void {

  }


}

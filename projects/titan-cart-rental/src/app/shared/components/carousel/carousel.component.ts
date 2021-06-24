/**
 *  code taken of https://github.com/joselcvarela/ng2-carouselamos/
 */
import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import isEqual from 'lodash.isequal';

export interface SelectedItem {
  item: any;
  index: number;
  first: boolean;
}
/*
 *
 * @param() startAt - index of slide to render first. Default to 0.
 * @param() items - List of items to belong in carousel
 * @param() width - Size of window(view) to show
 * @param() $prev - Template for previous button
 * @param() $next - Template for next button
 * @param() $item - Template for the item
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[titan-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  childIndex = 0;
  amount = 0;
  startPress = 0;
  lastX = 0;

  @Input()
  startAt = 0;

  @Input()
  items: Array<any> = [];

  @Input()
  width = 500;

  @Input()
  $prev: TemplateRef<any>;

  @Input()
  $next: TemplateRef<any>;

  @Input()
  $item: TemplateRef<any>;

  @Output()
  onSelectedItem: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();

  @ViewChild('list', {static: true})
  list: ElementRef;

  hideBtnAndCenter = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  onMousedown(e: MouseEvent): void {
    if (e.button === 1) {
      this.startPress = e.clientX;
      this.lastX = this.amount;
    }
  }

  onTouchdown(e: TouchEvent): void {
    if (navigator.userAgent.indexOf('Android') >= 0) {
      e.preventDefault();
    }
    this.startPress = e.targetTouches[0].clientX;
    this.lastX = this.amount;
  }

  onMousemove(e: MouseEvent, maxWidth: number): void {
    if (e.button === 1) {
      const amount = this.lastX - (this.startPress - e.clientX);
      if (amount > 0 || amount < -(maxWidth - this.width)) {
        return;
      }
      this.amount = amount;
    }
  }

  onTouchmove(e: TouchEvent, maxWidth: number): void {
    if (navigator.userAgent.indexOf('Android') >= 0) {
      e.preventDefault();
    }
    const amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
    if (amount > 0 || amount < -(maxWidth - this.width)) {
      return;
    }
    this.amount = amount;
  }

  onMouseup(e: MouseEvent, elem: any): void {
    if (e.button === 1) {
      this.startPress = 0;
      this.snap(elem);
    }
  }

  onTouchup(e: TouchEvent, elem: any): void {
    if (navigator.userAgent.indexOf('Android') >= 0) {
      e.preventDefault();
    }
    this.startPress = 0;
    this.snap(elem);
  }

  snap(elem: any): number {
    let counter = 0;
    let lastVal = 0;
    for (let i = 0; i < this.items.length; i++) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter +=
        el.offsetWidth +
        (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
      if (this.amount <= lastVal && this.amount >= -counter) {
        this.amount = -lastVal;
        this.childIndex = i;
        this.onSelectedItem.emit({
          item: this.items[this.childIndex],
          index: this.childIndex,
          first: false
        });
        return;
      }
      lastVal = counter;
    }
    return counter;
  }

  scroll(forward: boolean, elem: any, qty = 1): void {
    this.childIndex += forward ? qty : -qty;
    this.onSelectedItem.emit({
      item: this.items[this.childIndex],
      index: this.childIndex,
      first: false
    });
    this.amount = -this.calcScroll(elem);
  }

  calcScroll(elem: any): number {
    let counter = 0;
    for (let i = this.childIndex - 1; i >= 0; i--) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter +=
        el.offsetWidth +
        (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    }
    return counter;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.items &&
      !isEqual(changes.items.previousValue, changes.items.currentValue)
    ) {
      if (changes.items.firstChange) {
        this.onSelectedItem.emit({
          item: this.items[this.childIndex],
          index: this.childIndex,
          first: true
        });
      }
      this.amount = 0;

    }
  }

  ngAfterViewInit(): void {
    this.startPress = 1;
    setTimeout(() => {
      this.scroll(true, this.list.nativeElement, this.startAt);
      if (this.amount >= 0 && this.amount <= -(this.list.nativeElement.scrollWidth - this.width)) {
        this.hideBtnAndCenter = true;
      }
      this.startPress = 0;
      this.cd.detectChanges();
    }, 0);
  }

}

import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'titan-search-bar-header-mobile',
  templateUrl: './search-bar-header-mobile.component.html',
  styleUrls: ['./search-bar-header-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SearchBarHeaderMobileComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(dialog): void {
    this.dialogService.open(dialog, {dialogClass: 'dialog-styles' });
  }

}

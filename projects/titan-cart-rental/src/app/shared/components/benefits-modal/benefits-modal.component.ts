import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'titan-benefits-modal',
  templateUrl: './benefits-modal.component.html',
  styleUrls: ['./benefits-modal.component.scss']
})
export class BenefitsModalComponent implements OnInit {
  benefit;

  constructor(protected dialogRef: NbDialogRef<BenefitsModalComponent>) { }

  ngOnInit(): void {

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

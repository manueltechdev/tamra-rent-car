import { Component, OnInit } from '@angular/core';
import {SeoulModalComponent} from '../seoul-modal/seoul-modal.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'titan-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.scss']
})
export class TopDestinationsComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialogService.open(SeoulModalComponent, {});
  }

}

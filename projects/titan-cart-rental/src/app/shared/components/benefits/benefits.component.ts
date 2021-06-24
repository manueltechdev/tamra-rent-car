import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserService} from '../../../core/state/user/user.service';
import {NbDialogService} from '@nebular/theme';
import {BenefitsModalComponent} from '../benefits-modal/benefits-modal.component';

@Component({
  selector: 'titan-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefits: any = [];

  constructor(
      private http: HttpClient,
      private userService: UserService,
      private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'benefits');
    const benefitsAPI = `http://181.59.120.30/tamra/admincars/extrainfo.php`;
    this.http.get(benefitsAPI, {params}).subscribe((data) => {
      this.benefits = data;
      this.benefits.map((benefit, index) => {
        benefit.benefitsImgAPI = `http://181.59.120.30/tamra/admincars/carimage.php/?token=${token}&img_id=${benefit.image}`;
        // tslint:disable-next-line:max-line-length
        benefit.previewText = benefit.text.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|')[0];
        return benefit;
      });
    });
  }

  openDialog(benefit): void {
    this.dialogService.open(BenefitsModalComponent, {
      context: {
        benefit
      },
    });
  }

}

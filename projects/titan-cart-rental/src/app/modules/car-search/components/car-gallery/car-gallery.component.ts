import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {UserService} from '../../../../core/state/user/user.service';

@Component({
  selector: 'titan-car-gallery',
  templateUrl: './car-gallery.component.html',
  styleUrls: ['./car-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarGalleryComponent implements OnInit {
  @Input() image: string;
  items = [
    {
      thumbnail: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/waiMba4iT22Yv1Y8-wInFg.1440x700.jpg',
      name: '1'
    },
    {
      thumbnail: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/waiMba4iT22Yv1Y8-wInFg.1440x700.jpg',
      name: '1'
    },
    {
      thumbnail: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/waiMba4iT22Yv1Y8-wInFg.1440x700.jpg',
      name: '1'
    },
    {
      thumbnail: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/waiMba4iT22Yv1Y8-wInFg.1440x700.jpg',
      name: '1'
    },
  ];
  public servImage: string[];
  constructor(private user: UserService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.user
      .userQuery.userKey$
      .pipe(
        tap(it => {
          this.servImage = [`${environment.host}/admincars/carimage.php/?token=${it}&img_id=${this.image}`];
          this.cd.detectChanges();
        })
      ).subscribe();
  }

}

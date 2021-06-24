import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Inject,
  Injector,
  OnInit, ViewChild, ViewContainerRef, Type, OnDestroy, Input, AfterViewInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import {ResponsiveUtilsService} from '../../../core/services/responsive-utils/responsive-utils.service';
import {SearchBarHomeDesktopComponent} from '../search-bar-home-desktop/search-bar-home-desktop.component';
import {SearchBarHeaderDesktopComponent} from '../search-bar-header-desktop/search-bar-header-desktop.component';
import {Router} from '@angular/router';
import {SearchBarHomeMobileComponent} from '../search-bar-home-mobile/search-bar-home-mobile.component';
import {hours} from '../../../core/mock/hours';
import {UserService} from '../../../core/state/user/user.service';
import {SearchBarCarsSearchComponent} from '../search-bar-cars-search/search-bar-cars-search.component';
import {CitiesService} from '../../../core/state/cities/cities.service';
import {City} from '../../../core/state/cities/city.model';

export type ComponentsLayoutTypes = Type<SearchBarHomeDesktopComponent> |
  Type<SearchBarHeaderDesktopComponent> | Type<SearchBarHomeMobileComponent>  | Type<SearchBarCarsSearchComponent>;

@Component({
  selector: 'titan-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, AfterViewInit {
  rangeForm: FormGroup;
  value: string;
  activeUrl: string;
  @Input() carsSearchDetail = false;
  @Input() carsSearchPage = false;
  filteredControlOptions$ = this.citiesService.citiesQuery.selectAll() as Observable<City[]>;


  @ViewChild('viewContainer', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef;

  constructor(private fb: FormBuilder,
              public responsiveUtils: ResponsiveUtilsService,
              private cd: ChangeDetectorRef,
              private injector: Injector,
              private router: Router,
              private citiesService: CitiesService,
              private userService: UserService,
              private resolver: ComponentFactoryResolver) {
    this.createForm();

  }

  ngOnInit(): void {
    this.citiesService.getCities()
      .subscribe();
    this.renderComponentsLayout();

    this.listenFormValueChanges();



  }

  ngAfterViewInit(): void {
    if (this.router.url.includes('cars-search')) {
      this.activeUrl = this.router.url.replace(/%20/, ' ');
    }
  }


  renderDataComponents(component: ComponentsLayoutTypes): void {
      setTimeout(() => { // hard coded due to change detection
        if (this.viewContainer) {
          this.viewContainer.clear();
          const factory = this.resolver.resolveComponentFactory(component);
          const componentRef = this.viewContainer.createComponent(factory);
          (componentRef.instance).filteredControlOptions$ = this.filteredControlOptions$;
          (componentRef.instance).rangeForm = this.rangeForm;
          (componentRef.instance).fromHours = hours();
          (componentRef.instance).untilHour = hours();
          this.cd.detectChanges();
        }
      }, 0);

  }

  renderComponentsLayout(): void {
    if (this.carsSearchDetail) {
      this.renderDataComponents(SearchBarCarsSearchComponent);
      return;
    }
    if (this.responsiveUtils.lgMin && this.router.url.includes('cars-search')) {
      this.renderDataComponents(SearchBarHeaderDesktopComponent);
    } else if (!this.responsiveUtils.lgMin && this.router.url.includes('cars-search')) {
      this.renderDataComponents(SearchBarHeaderDesktopComponent);
    } else if (this.responsiveUtils.lgMin) {
      this.renderDataComponents(SearchBarHomeDesktopComponent);
    } else {
      this.renderDataComponents(SearchBarHomeMobileComponent);
    }
  }

  listenFormValueChanges(): void {
    this.rangeForm
      .valueChanges
      .pipe(
        tap(it => {
          // console.log(this.rangeForm);
          // console.log(it);
          // if (this.router.url.includes('cars-search')) {
          //   this.submit();
          // }

          if (this.rangeForm.get('where').value &&
              this.rangeForm.get('rangeStart').value &&
              this.rangeForm.get('rangeEnd').value &&
              this.rangeForm.get('untilHour').value &&
              this.rangeForm.get('formHour').value) {
            if (this.router.url.includes('cars-search') && !this.router.url.includes('car-detail') && (`/cars-search/${this.rangeForm.get('where').value}/model/${this.rangeForm.get('rangeStart').value.format('DD-MM-YYYY')}:${this.rangeForm.get('rangeEnd').value.format('DD-MM-YYYY')}/${this.rangeForm.get('formHour').value}/${this.rangeForm.get('untilHour').value}`
              !== this.activeUrl)) {
              console.log(`/cars-search/${this.rangeForm.get('where').value}/model/${this.rangeForm.get('rangeStart').value.format('DD-MM-YYYY')}:${this.rangeForm.get('rangeEnd').value.format('DD-MM-YYYY')}/${this.rangeForm.get('formHour').value}/${this.rangeForm.get('untilHour').value}`)
              console.log(this.router.url.replace(/%20/, ' '));
              console.log(1);
              this.updateSearch();
            }
          }

          // ['cars-search',
          //   this.rangeForm.get('where').value.islocation,
          //   'model',
          //   `${this.rangeForm.get('rangeStart').value.format('DD-MM-YYYY')}:${this.rangeForm.get('rangeEnd').value.format('DD-MM-YYYY')}`,
          //   this.rangeForm.get('formHour').value,
          //   this.rangeForm.get('untilHour').value
          // ]
        })
      ).subscribe();
  }


  createForm(): void {
    this.rangeForm = this.fb.group(
      {
        where: ['', [Validators.required]],
        formHour: ['', [Validators.required]],
        rangeStart: ['', [Validators.required]],
        rangeEnd: ['', [Validators.required]],
        untilHour: ['', [Validators.required]]
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  resize(): void {
    this.renderComponentsLayout();
    this.cd.markForCheck();
  }

  updateSearch(): void {

    this.citiesService.store.setActive(this.rangeForm.get('where').value);

    this.router.navigate(['cars-search',
      this.rangeForm.get('where').value,
      'model',
      `${this.rangeForm.get('rangeStart').value.format('DD-MM-YYYY')}:${this.rangeForm.get('rangeEnd').value.format('DD-MM-YYYY')}`,
      this.rangeForm.get('formHour').value,
      this.rangeForm.get('untilHour').value
    ]);

    window.location.reload();
  }

  submit(): void {
    if (this.rangeForm.get('where').value &&
        this.rangeForm.get('rangeStart').value &&
        this.rangeForm.get('rangeEnd').value &&
        this.rangeForm.get('untilHour').value &&
        this.rangeForm.get('formHour').value) {
      this.citiesService.store.setActive(this.rangeForm.get('where').value['0']);
      this.userService.dispatchUserValueForm({
        city: this.rangeForm.get('where').value.islocation,
        select: 'model',
        bkdt: {
          start: this.rangeForm.get('rangeStart').value,
          end: this.rangeForm.get('rangeEnd').value.end
        },
        untilHour: this.rangeForm.get('untilHour').value,
        fromHour: this.rangeForm.get('formHour').value
      });
      this.router.navigate(['cars-search',
        this.rangeForm.get('where').value.islocation,
        'model',
        `${this.rangeForm.get('rangeStart').value.format('DD-MM-YYYY')}:${this.rangeForm.get('rangeEnd').value.format('DD-MM-YYYY')}`,
        this.rangeForm.get('formHour').value,
        this.rangeForm.get('untilHour').value
      ]);
    }
  }
}

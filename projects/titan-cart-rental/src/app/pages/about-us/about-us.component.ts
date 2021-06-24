import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserService} from "../../core/state/user/user.service";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'titan-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  pageData = {
    aboutTamra: {
      firstParagraph: '',
      secondParagraph: ''
    },
    mainBusiness: {
      title: '',
      text: ''
    },
    products: {
      title: '',
      text: '',
      firstParagraph: '',
      secondParagraph: '',
      thirdParagraph: ''
    },
    insurance: {
      title: '',
      firstParagraph: '',
      secondParagraph: ''
    }
  };

  slideData = [
    {
      date: 'March 1999',
      content: 'Tamra Rent A Car is officially registered as a car rental agency on Jeju Island with its CEO being In-woong Park.'
    },
    {
      date: 'January 2002',
      content: 'Tamra has 120 vehicles registered and opens its first administration office in Seogwipo.'
    },
    {
      date: 'April 2003',
      content: 'Tamra\'s head office is moved to Jeju City and a sales office is opened in Gwangju.'
    },
    {
      date: 'October 2004',
      content: 'Tamra increases its fleet to 150 vehicles.'
    },
    {
      date: 'February 2010',
      content: 'Park Yong-Kwon is inaugurated as Tamra Rent A Car’s second CEO.'
    },
    {
      date: 'June 2011',
      content: 'Tamra\'s fleet increases to 350 vehicles.'
    },
    {
      date: 'August 2013',
      content: 'Tamra moves its head office to 5, Gonghang-ro, becoming the closest car rental agency to Jeju International Airport.'
    },
    {
      date: 'May 2014',
      content: 'Tamra\'s fleet increases to 520 vehicles.'
    },
    {
      date: 'December 2017',
      content: 'Tamra opens a Seoul office and its fleet reaches 800 – including electric cars. Tamra signs a deal with Nissan Korea along with CEO Takehiko Kikuchi to help expand the electric vehicle market and promote a zero-emissions car rental experience.'
    },
    {
      date: 'August 2018 to Present',
      content: 'Tamra begins operating Tamra Rent International by partnering with global tourism platforms. In addition, Tamra begins to integrate social media and builds an international website dedicated to international customers.'
    },
  ];

  constructor(
      private http: HttpClient,
      private userService: UserService
  ) { }

  ngOnInit(): void {
    this.setAboutData();
    this.setMainBusinessData();
    this.setProductsData();
    this.setInsuranceData();
  }

  setAboutData(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'about');
    const benefitsAPI = `http://181.59.120.30/tamra/admincars/extrainfo.php`;
    this.http.get(benefitsAPI, {params}).subscribe((data: any) => {
      const arrayData = data.about.split("");
      let dotsCount = 1;
      let indexOfFirstParagraph = 0;
      arrayData.forEach((char, index) => {
        if (char === '.') {
          dotsCount++;
        }

        if (dotsCount === 3) {
          indexOfFirstParagraph = index;
        }
      });

      this.pageData.aboutTamra.firstParagraph = data.about.substr(0, indexOfFirstParagraph + 2);
      this.pageData.aboutTamra.secondParagraph = data.about.substr(indexOfFirstParagraph + 2 );
    });
  }

  setMainBusinessData(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'abmain');
    const benefitsAPI = `http://181.59.120.30/tamra/admincars/extrainfo.php`;
    this.http.get(benefitsAPI, {params}).subscribe((data: any) => {
      this.pageData.mainBusiness.title = data.title;
      this.pageData.mainBusiness.text = data.abmain;
    });
  }

  setProductsData(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'products');
    const benefitsAPI = `http://181.59.120.30/tamra/admincars/extrainfo.php`;
    this.http.get(benefitsAPI, {params}).subscribe((data: any) => {
      const arrayData = data.products.split('');
      let dotsCount = 1;
      let indexOfFirstParagraph = 0;
      let indexOfSecondParagraph = 0;
      let indexOfThirdParagraph = 0;
      for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i] === '.') {
          dotsCount++;
        }

        if (dotsCount === 3) {
          indexOfFirstParagraph = i;
        }

        if (dotsCount === 5) {
          indexOfThirdParagraph = i;
          indexOfSecondParagraph = i - indexOfFirstParagraph;
          break;
        }
      }

      this.pageData.products.firstParagraph = data.products.substr(0, indexOfFirstParagraph + 2);
      this.pageData.products.secondParagraph = data.products.substr(indexOfFirstParagraph + 2, indexOfSecondParagraph);
      this.pageData.products.thirdParagraph = data.products.substr(indexOfThirdParagraph + 2);
      this.pageData.products.title = data.title;
    });
  }

  setInsuranceData(): void {
    const token = `${this.userService.userQuery.getValue().userKey}`;
    const params = new HttpParams().set(
        'token', token,
    ).set('select', 'insurance');
    const benefitsAPI = `http://181.59.120.30/tamra/admincars/extrainfo.php`;
    this.http.get(benefitsAPI, {params}).subscribe((data: any) => {
      this.pageData.insurance.title = data.title;
      this.pageData.insurance.firstParagraph = data.insurance.substr(0, data.insurance.indexOf('*'));
      this.pageData.insurance.secondParagraph = data.insurance.substr(data.insurance.indexOf('*'));
    });
  }

}

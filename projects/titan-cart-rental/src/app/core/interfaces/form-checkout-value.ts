import {Moment} from "moment";

export interface FormCheckoutValue {
  fullName: string;
  koreanLicence: string;
  internationalDriving: string;
  expirationDate: Moment;
  country: string;
  passportOrKoreanCard: string;
  permanentResident: string;
  hotel: string;
  dateOfBirth: Moment;
  phoneWhatsApp: string;
  username: string;
  accountPassword: string;
  payment: string;
  conditions: string;
}

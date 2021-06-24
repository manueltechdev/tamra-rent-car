export interface PaypalOrder {
  create_time: string;
  update_time: string;
  id: string;
  intent: string;
  status: string;
  payer: Payer;
  purchase_units?: (PurchaseUnitsEntity)[] | null;
  links?: (LinksEntity)[] | null;
}
export interface Payer {
  email_address: string;
  payer_id: string;
  address: Address;
  name: Name;
}
export interface Address {
  country_code: string;
}
export interface Name {
  given_name: string;
  surname: string;
}
export interface PurchaseUnitsEntity {
  description: string;
  reference_id: string;
  amount: Amount;
  payee: Payee;
  shipping: Shipping;
  payments: Payments;
}
export interface Amount {
  value: string;
  currency_code: string;
}
export interface Payee {
  email_address: string;
  merchant_id: string;
}
export interface Shipping {
  name: Name1;
  address: Address1;
}
export interface Name1 {
  full_name: string;
}
export interface Address1 {
  address_line_1: string;
  admin_area_2: string;
  admin_area_1: string;
  postal_code: string;
  country_code: string;
}
export interface Payments {
  captures?: (CapturesEntity)[] | null;
}
export interface CapturesEntity {
  status: string;
  id: string;
  final_capture: boolean;
  create_time: string;
  update_time: string;
  amount: Amount;
  seller_protection: SellerProtection;
  links?: (LinksEntity)[] | null;
}
export interface SellerProtection {
  status: string;
  dispute_categories?: (string)[] | null;
}
export interface LinksEntity {
  href: string;
  rel: string;
  method: string;
  title: string;
}

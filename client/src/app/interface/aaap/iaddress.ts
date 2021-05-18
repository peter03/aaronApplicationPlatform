import { BaseAddress } from "src/app/model/aaap/baseaddress.model";
import { IId } from "src/app/interface/aaap/iid";

export interface IAddress extends IId {
  addressId: number;
  address: BaseAddress;
}

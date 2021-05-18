import { IId } from 'src/app/interface/aaap/IId';
import { IDisplayName } from 'src/app/interface/aaap/IDisplayName';

export class BaseAddress implements IDisplayName {

  id: number;
  name1: string;
  name2?: string;
  street?: string;
  zip?: string;
  city?: string;
  countryId: number;

  get displayName(): string {
    return this.name1;
  }

  constructor(
  ) { }

}

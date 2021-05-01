import {Address} from './address';

export class Cinema {

  // CinemaID: string;
  // CinemaName: string;
  // address: string;
  // cityId: string;
  id: number;
  area: number;
  name: string;
  address: Address;


  constructor(area: number, name: string, address: Address) {
    this.area = area;
    this.name = name;
    this.address = address;
  }
}

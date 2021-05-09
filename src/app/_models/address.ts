export class Address{
  id: number;
  city: string;
  state: string;
  country: string;


  constructor( city: string, state: string, country: string) {

    this.city = city;
    this.state = state;
    this.country = country;
  }

}


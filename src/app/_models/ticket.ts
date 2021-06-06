import {FilmSession} from './filmSession';
import {User} from './user';
import {SeatEmbed} from './seatembed';

export class Ticket{


  id: number;
  time: Date;
  filmSession: FilmSession;
  price: number;
  currency: string;
  method: string;
  intent: string;
  description: string;
  user;
  seatEmbeds: SeatEmbed;
  status: number;


  // tslint:disable-next-line:max-line-length
  constructor(time: Date, filmSession: FilmSession, price: number, currency: string, method: string, intent: string, description: string, user, seatEmbeds: SeatEmbed, status: number) {

    this.time = time;
    this.filmSession = filmSession;
    this.price = price;
    this.currency = currency;
    this.method = method;
    this.intent = intent;
    this.description = description;
    this.user = user;
    this.seatEmbeds = seatEmbeds;
    this.status = status;
  }
}

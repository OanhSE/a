import {Hall} from './hall';
import {Ticket} from './ticket';
import {Film} from './film';

export class FilmSession {
  id: number;
  date: Date;
  film: Film;
  hall: Hall;
  startFrom: string;
  endTo: string;
  tickets: Set<Ticket>;


  constructor(date: Date, film: Film, hall: Hall, startFrom: string, endTo: string) {
    this.date = date;
    this.film = film;
    this.hall = hall;
    this.startFrom = startFrom;
    this.endTo = endTo;
  }
}

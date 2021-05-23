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


  constructor(id: number, date: Date, film: Film, hall: Hall, startFrom: string) {
    this.id = id;
    this.date = date;
    this.film = film;
    this.hall = hall;
    this.startFrom = startFrom;
    
  }
}

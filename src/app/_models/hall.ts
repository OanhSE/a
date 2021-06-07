import {Cinema} from './cinema';
import {Seat} from './seat';

export class Hall{
  id: number;
  name: string;
  description: string;
  cinema: Cinema;
  seats: Set<Seat>;
  status: number;
  totalRow: number;
  totalColumn: number;


 constructor(name: string, description: string, cinema: Cinema,  status: number, totalRow: number, totalColumn: number) {
    this.name = name;
    this.description = description;
    this.cinema = cinema;
    this.status = status;
    this.totalRow = totalRow;
    this.totalColumn = totalColumn;
  }
}

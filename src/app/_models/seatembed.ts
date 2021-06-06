import {Seat} from './seat';

export class SeatEmbed{
  row: Seat;
  seat: number;

  constructor(seat: Seat, row: number) {
    this.row = seat;
    this.seat = row;
  }
}

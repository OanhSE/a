export class Seat{
  id: string;
  rowIndex: number;
  columnIndex: number;
  status: number;

  constructor(id: string, rowIndex: number, columnIndex: number, status: number) {
    this.id = id;
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.status = status;
  }
}

export class Seat{
  id: string;
  rowIndex: number;
  columnIndex: number;

  constructor(id: string, rowIndex: number, columnIndex: number) {
    this.id = id;
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }
}

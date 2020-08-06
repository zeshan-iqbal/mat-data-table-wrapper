import { IDataTableColumn } from './data-table/models/data-table-column.model';
import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortRows: boolean = true;
  title = 'np-datatable';
  data = ELEMENT_DATA;
  columns: IDataTableColumn[] = [
    { ColumnDataPropName: "position", ColumnNameResouceKey: "Position", Width: 25 },
    { ColumnDataPropName: "name", ColumnNameResouceKey: "Name", Width: 25 },
    { ColumnDataPropName: "weight", ColumnNameResouceKey: "Weight", Width: 25 },
    { ColumnDataPropName: "symbol", ColumnNameResouceKey: "Symbol", Width: 25 },
  ]
}
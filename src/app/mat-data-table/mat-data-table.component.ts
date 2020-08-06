import { Component, OnInit, Input } from '@angular/core';
import { IDataTableColumn } from '../data-table/models/data-table-column.model';

@Component({
  selector: 'app-mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styleUrls: ['./mat-data-table.component.scss']
})
export class MatDataTableComponent implements OnInit {
  @Input() columns: IDataTableColumn[];
  @Input() data: any[];
  @Input() pageSizeLimit: number = 0;
  @Input() isLoading: boolean = false;
  @Input() sortRows: boolean = false;
  displayedColumns: string[] = ['sortRows', 'position', 'name', 'weight', 'symbol'];
  constructor() { }

  ngOnInit() {
  }

}

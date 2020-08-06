import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IDataTableColumn } from '../data-table/models/data-table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styleUrls: ['./mat-data-table.component.scss']
})
export class MatDataTableComponent implements OnInit, OnChanges {
  @Output() onDrop: EventEmitter<any> = new EventEmitter();
  @Input() columns: IDataTableColumn[];
  @Input() data: any[];
  @Input() pageSizeLimit: number = 0;
  @Input() isLoading: boolean = false;
  @Input() sortRows: boolean = false;
  @Input() rowSortMap: (item, index) => [] = null;
  displayedColumns: string[] = ['sortRows', 'position', 'name', 'weight', 'symbol'];
  dataSource;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!_.isNil(changes)
      && !_.isNil(changes.data)
      && changes.data.firstChange === false
      && !_.isNil(changes.data.currentValue)) {
      this.dataSource.data = changes.data.currentValue;
    }
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.onDrop.emit([event.previousIndex, event.currentIndex]);
  }
}



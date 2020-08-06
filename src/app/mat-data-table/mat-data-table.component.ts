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
  @Output() onDrop: EventEmitter<CdkDragDrop<string[]>> = new EventEmitter();
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
      this.dataSource.data =changes.data.currentValue;
    }
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(
    //   event.container.data,
    //   event.previousIndex,
    //   event.currentIndex
    // );
    this.onDrop.emit(event);

    // // updates moved data and table, but not dynamic if more dropzones
//     let data = this.data;
//     if(!_.isNil(this.rowSortMap)){
// data = this.data.map(this.rowSortMap);
//     }

//     this.dataSource.data = data;
  }
}



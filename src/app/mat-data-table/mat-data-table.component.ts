import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IDataTableColumn } from '../data-table/models/data-table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { ColumnTemplateComponent } from '../data-table/template-components/column-template.component';
import { MatColumnTemplateComponent } from './mat-column-template/mat-column-template.component';

@Component({
  selector: 'app-mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styleUrls: ['./mat-data-table.component.scss']
})
export class MatDataTableComponent implements OnInit, OnChanges {

  private customColumnTemplates: MatColumnTemplateComponent[] = [];

  @Output() onDrop: EventEmitter<any> = new EventEmitter();
  @Input() columns: IDataTableColumn[];
  @Input() data: any[];
  @Input() pageSizeLimit: number = 0;
  @Input() isLoading: boolean = false;
  @Input() sortRows: boolean = false;
  @Input() rowSortMap: (item, index) => [] = null;
  internalColumns: any[];
  displayedColumns: string[] = [];//['position', 'name', 'weight', 'symbol'];
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
    if(this.sortRows) this.displayedColumns.push('sortRows')
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createColums(this.columns);
    }, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.onDrop.emit([event.previousIndex, event.currentIndex]);
  }

  addCustomColumnTemplate(customColumnComponent: MatColumnTemplateComponent): void {
    this.customColumnTemplates.push(customColumnComponent);
  }
  private createColums(columns: IDataTableColumn[]): void {
    let newColumns = [];

    for (let i = 0; i < columns.length; i++) {
      const currentColumn: IDataTableColumn = columns[i];
      this.displayedColumns.push(currentColumn.ColumnDataPropName);

      const customColumnTemplate: MatColumnTemplateComponent = _.find(this.customColumnTemplates, { columnDataPropName: currentColumn.ColumnDataPropName });

      let newColumn: any = {};
      if (!_.isNil(currentColumn.ColumnNameResouceKey) && !_.isEmpty(currentColumn.ColumnNameResouceKey)) {
        newColumn.ColumnName = currentColumn.ColumnNameResouceKey;
      }
      else {
        newColumn.ColumnName = "";
      }
      newColumn.ColumnDataPropName = currentColumn.ColumnDataPropName;
      newColumn.IsSortable = currentColumn.IsSortable;
      newColumn.Width = currentColumn.Width;
      if (!_.isNil(customColumnTemplate) && !_.isNil(customColumnTemplate.templateRef)) {
        newColumn.Template = customColumnTemplate.templateRef;
      }

      newColumns.push(newColumn);
    }

    if (newColumns.length > 0) {
      this.internalColumns = newColumns;
    }
  }
}



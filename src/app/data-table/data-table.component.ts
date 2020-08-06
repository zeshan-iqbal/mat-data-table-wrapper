import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from "lodash";
import { IDataTableColumn } from './models/data-table-column.model';
import { ColumnTemplateComponent } from './template-components/column-template.component';

@Component({
  selector: "np-data-table",
  templateUrl: "./data-table.component.html"
})
export class DataTableComponent implements OnInit, OnChanges {

  private customColumnTemplates: ColumnTemplateComponent[] = [];

  public internalColumns: any[];

  @Input() columns: IDataTableColumn[];
  @Input() data: any[];
  @Input() pageSizeLimit: number = 0;
  @Input() isLoading: boolean = false;

  constructor() {

  }

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.createColums(this.columns);
    }, 1);
  }

  public ngAfterContentInit(): void {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!_.isNil(changes)
      && !_.isNil(changes.columns)
      && changes.columns.firstChange === false
      && !_.isNil(changes.columns.currentValue)
      && changes.columns.currentValue.length > 0) {
      setTimeout(() => {
        this.createColums(<IDataTableColumn[]>changes.columns.currentValue);
      }, 1);
      
    }
  }

  public addCustomColumnTemplate(customColumnComponent: ColumnTemplateComponent): void {
    this.customColumnTemplates.push(customColumnComponent);
  }

  private createColums(columns: IDataTableColumn[]): void {
    let newColumns = [];

    for (let i = 0; i < columns.length; i++) {
      const currentColumn: IDataTableColumn = columns[i];

      const customColumnTemplate: ColumnTemplateComponent = _.find(this.customColumnTemplates, { columnDataPropName: currentColumn.ColumnDataPropName });

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

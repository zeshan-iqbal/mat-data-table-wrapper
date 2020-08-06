export interface IDataTableColumn {
  ColumnNameResouceKey?: string,
  ColumnDataPropName: string,
  IsSortable?: boolean,
  DisplayOrder?: number,
  Width?: number;
  format?: (value: any) => string;
}


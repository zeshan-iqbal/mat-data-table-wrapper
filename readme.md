Data Table Features
-------------------------------------
CONSIDERATION: This will be a dumb/presentational component only. Data will be provided to this component and all the actions on this datasource will always occur in consuming compoenent.
In short any operation that will result change in data needs to be carried out in consuming component. The other solution is some state management solution.
-------------------------------------
1. Master detail support (Upto N-level)
2. Server/Cliet Side sorting, filtering, and Pagination.
3. Row sorting using row drag & drop.

Data Table API
------------------------------------------------------
CONSIDERATION: If we are wrapping some component into a component; how to decide what API's should we expose from component being wrapped.
In doing this we basically hiding alot of features (which will not be accessable untill we expose them explicitly) behind covers. We need to think this through.
------------------------------------------------------
Props:
1. columns= [{
  ColumnNameResouceKey?: string,
  ColumnDataPropName: string,
  IsSortable?: boolean,
  //ColumnType: DataTableColumnType,
  Width?: number;
  format?: (value: any) => string;
  DisplayOrder:  
}]

2. data = [{},{}]
3. RowSorting = boolean
4. abortRowSorting = (row) => true;
5. pagging: object | boolean (default false)
6. IsLoading


Challanges
-----------------------------------------

Drag Drop
1. This is handled. component is emiiting an event through output props and then consuming component can handle this event. It can decide either accept this sort or reject it.
2. ServerSide sorting, filtering, and paging will also be handled by output prop. Client side sorting can be handled local paginator. 



Master Detail
-------------
<np-datatable>
    <np-row-detail-template>
        <np-datatable>
            <np-row-detail-template>
            </np-row-detail-template>
        </np-datatable>
    </np-row-detail-template>

    <np-column-template>
 	Col1
    </np-column-template>
    <np-column-template>
	Col2
    </np-column-template>
</np-datatable>


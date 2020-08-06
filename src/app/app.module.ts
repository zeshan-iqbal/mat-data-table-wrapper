import { DemoMaterialModule } from './material-module';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumnTemplateComponent } from './data-table/template-components/column-template.component';
import { MatColumnTemplateComponent } from './mat-data-table/mat-column-template/mat-column-template.component';

@NgModule({
  declarations: [
    AppComponent,
    MatDataTableComponent,
    DataTableComponent,
    ColumnTemplateComponent,
    MatColumnTemplateComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    DemoMaterialModule,
    //CustomTranslateModule.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

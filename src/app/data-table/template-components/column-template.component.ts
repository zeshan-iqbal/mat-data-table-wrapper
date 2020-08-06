import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { DataTableComponent } from '../data-table.component';

@Component({
  selector: "np-column-template",
  templateUrl: "./column-template.component.html"
})
export class ColumnTemplateComponent {

  @ContentChild(TemplateRef, { static: true }) public templateRef: TemplateRef<any>;

  @Input() columnDataPropName: string;

  constructor(private dataTableComponent: DataTableComponent) {
    this.dataTableComponent.addCustomColumnTemplate(this);
  }
}

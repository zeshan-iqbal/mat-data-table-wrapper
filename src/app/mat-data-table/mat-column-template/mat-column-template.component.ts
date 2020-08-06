import { MatDataTableComponent } from './../mat-data-table.component';
import { Component, Input, TemplateRef, ContentChild } from '@angular/core';


@Component({
  selector: "np-mat-column-template",
  templateUrl: "./mat-column-template.component.html"
})
export class MatColumnTemplateComponent {

  @ContentChild(TemplateRef, { static: true }) public templateRef: TemplateRef<any>;

  @Input() columnDataPropName: string;

  constructor(private dataTableComponent: MatDataTableComponent) {
    this.dataTableComponent.addCustomColumnTemplate(this);
  }
}

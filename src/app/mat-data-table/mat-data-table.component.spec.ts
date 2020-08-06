import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDataTableComponent } from './mat-data-table.component';

describe('MatDataTableComponent', () => {
  let component: MatDataTableComponent;
  let fixture: ComponentFixture<MatDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

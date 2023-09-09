import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderDashboardComponent } from './work-order-dashboard.component';

describe('WorkOrderDashboardComponent', () => {
  let component: WorkOrderDashboardComponent;
  let fixture: ComponentFixture<WorkOrderDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderDashboardComponent]
    });
    fixture = TestBed.createComponent(WorkOrderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

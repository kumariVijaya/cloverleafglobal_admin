import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerAssignmentComponent } from './freelancer-assignment.component';

describe('FreelancerAssignmentComponent', () => {
  let component: FreelancerAssignmentComponent;
  let fixture: ComponentFixture<FreelancerAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerAssignmentComponent]
    });
    fixture = TestBed.createComponent(FreelancerAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

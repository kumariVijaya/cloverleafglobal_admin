import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-work-order-dashboard',
  templateUrl: './work-order-dashboard.component.html',
  styleUrls: ['./work-order-dashboard.component.scss']
})
export class WorkOrderDashboardComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Try to get the canvas element by ID
    const canvas = document.getElementById('myPieChart') as HTMLCanvasElement;
  
    // Check if the canvas element exists before accessing its context
    if (canvas) {
      const ctx = canvas.getContext('2d');
  
      if (ctx) {
        // Sample data for the pie chart
        const data = {
          labels: ['Completed', 'Process', 'Incompleted'],
          datasets: [{
            data: [30, 40, 20], // Example values
            backgroundColor: ['#ff3862', '#0086e0', '#ecb530'],
          }],
        };
  
        // Create the pie chart
        new Chart(ctx, {
          type: 'pie',
          data: data,
        });
      }
    }
  }
  
}

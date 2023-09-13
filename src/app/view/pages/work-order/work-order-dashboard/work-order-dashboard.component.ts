import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-work-order-dashboard',
  templateUrl: './work-order-dashboard.component.html',
  styleUrls: ['./work-order-dashboard.component.scss']
})
export class WorkOrderDashboardComponent implements OnInit, AfterViewInit {
  currentMonth: Date = new Date();
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendar: any[] = [];

  ngOnInit(): void {

// this.generateCalendar();
  }


  chartOption1 = {
	  animationEnabled: true,
	  theme: "dark2",
	  exportEnabled: true,
	  title: {
		text: "Developer Work "
	  },
	  subtitles: [{
		text: "Median hours/week"
	  }],
	  data: [{
		type: "pie", //change type to column, line, area, doughnut, etc
		indexLabel: "{name}: {y}%",
		dataPoints: [
			// { name: "Overhead", y: 9.1 },
			{ name: "Work Completes", y: 3.7 },
			{ name: "Work In progress", y: 36.4 },
			{ name: "Work in complete", y: 30.7 }
		]
	  }]
	}


  chartOption2 = {
	  animationEnabled: true,
	  title: {
		text: "Online/Offline Engineers"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  axisY: {
		title: "Percentage"
	  },
	  axisY2: {
		title: "million barrels/day"
	  },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
		type: "column",	
		name: "Online User",
		legendText: "Online user per month",
		showInLegend: true, 
		dataPoints:[
      { label: 'January', y: 75 },
      { label: 'February', y: 95 },
      { label: 'March', y: 35 },
      { label: 'April', y: 75 },
      { label: 'May', y: 65 },
      { label: 'June', y: 85 },
      { label: 'July', y: 95 },
      { label: 'August', y: 67 },
      { label: 'September', y: 49 },
      { label: 'October', y: 90 },
      { label: 'November', y: 83 },
      { label: 'December', y: 97 },
		]
	  }, {
		type: "column",	
		name: "Offline user",
		legendText: "Offline user per month",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[

		  { label: 'January', y: 65 },
      { label: 'February', y: 89 },
      { label: 'March', y: 55 },
      { label: 'April', y: 79 },
      { label: 'May', y: 95 },
      { label: 'June', y: 75 },
      { label: 'July', y: 85 },
      { label: 'August', y: 35 },
      { label: 'September', y: 45 },
      { label: 'October', y: 55 },
      { label: 'November', y: 75 },
      { label: 'December', y: 25 },
		]
	  }]
	}	


  generateCalendar() {
    const startDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const endDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const daysInMonth = endDate.getDate();
    const monthStartDay = startDate.getDay();
    this.calendar = [];

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < monthStartDay) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          week.push({
            date: new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), dayCounter)
          });
          dayCounter++;
        }
      }
      this.calendar.push(week);
    }
  }

  prevMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    console.log('Current month after setting previous month:', this.currentMonth);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    console.log('Current month after setting next month:', this.currentMonth);
    this.generateCalendar();
  }

  selectDate(day: any) {
    if (day && day.date) {
      // Handle date selection logic here
      console.log('Selected date:', day);
    }
  }
  

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

import { Component, OnInit } from '@angular/core';
interface Invoice {
  developer: string;
  dp: string;
  amount: number;
  paid: boolean;
}
@Component({
  selector: 'app-freelancer-dashboard',
  templateUrl: './freelancer-dashboard.component.html',
  styleUrls: ['./freelancer-dashboard.component.scss']
})
export class FreelancerDashboardComponent implements OnInit{
  invoices: Invoice[] = [
    { developer: 'John Doe', dp: './img/user.png', amount: 45000, paid: true },
    { developer: 'Jane Smith', dp: './img/user.png', amount: 10000, paid: false },
    // Add more invoices as needed
  ];

  ngOnInit(): void {
    // Initialization logic (if needed)
  }
}

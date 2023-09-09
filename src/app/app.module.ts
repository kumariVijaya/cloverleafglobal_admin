import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import {trigger,state,style,animate,transition}from '@angular/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './default-layout/header/header.component';
import { FooterComponent } from './default-layout/footer/footer.component';
import { LoginComponent } from './view/pages/login/login.component';
import { SignupComponent } from './view/pages/signup/signup.component';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService, } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './view/comman/sidebar/sidebar.component';
import { FreelancerDashboardComponent } from './view/pages/freelancer/freelancer-dashboard/freelancer-dashboard.component';
import { FreelancerRegistrationComponent } from './view/pages/freelancer/freelancer-registration/freelancer-registration.component';
import { FreelancerAssignmentComponent } from './view/pages/freelancer/freelancer-assignment/freelancer-assignment.component';
import { WorkOrderDashboardComponent } from './view/pages/work-order/work-order-dashboard/work-order-dashboard.component';
import { WorkOrderStatusComponent } from './view/pages/work-order/work-order-status/work-order-status.component';
import { UserManagementComponent } from './view/pages/user-management/user-management.component';
import { WorkOrderManagementComponent } from './view/pages/work-order/work-order-management/work-order-management.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SidebarComponent,
    FreelancerDashboardComponent,
    FreelancerRegistrationComponent,
    FreelancerAssignmentComponent,
    WorkOrderDashboardComponent,
    WorkOrderStatusComponent,
    UserManagementComponent,
    WorkOrderManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({preventDuplicates : true}),
    AppRoutingModule,
    FormsModule,                               
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ToastrService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

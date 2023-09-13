import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './default-layout/header/header.component';
import { LoginComponent } from './view/pages/login/login.component';
import { SignupComponent } from './view/pages/signup/signup.component';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';
import { FreelancerDashboardComponent } from './view/pages/freelancer/freelancer-dashboard/freelancer-dashboard.component';
import { FreelancerRegistrationComponent } from './view/pages/freelancer/freelancer-registration/freelancer-registration.component';
import { FreelancerAssignmentComponent } from './view/pages/freelancer/freelancer-assignment/freelancer-assignment.component';
import { WorkOrderDashboardComponent } from './view/pages/work-order/work-order-dashboard/work-order-dashboard.component';
import { WorkOrderStatusComponent } from './view/pages/work-order/work-order-status/work-order-status.component';
import { UserManagementComponent } from './view/pages/user-management/user-management.component';
import { WorkOrderManagementComponent } from './view/pages/work-order/work-order-management/work-order-management.component';
import { ClientListComponent } from './view/pages/client/client-list/client-list.component';
import { ClientAssetsComponent } from './view/pages/client/client-assets/client-assets.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
    data:{
      title:'Header'
    }
  },
  
  {
    path:'signup',
    component:SignupComponent,
    data:{
      title:'Header'
    }
  },
  { 
    path:'dashboard',
    component:DashboardComponent,
  
    children:[
        {
          path:'freelancer-dashboard',
          component:FreelancerDashboardComponent,
          data:{
            title:'Header'
          }
        },
      
        {
          path:'freelancer-registration',
          component:FreelancerRegistrationComponent,
          data:{
            title:'Header'
          }
        },
      
        {
          path:'freelancer-assignment',
          component:FreelancerAssignmentComponent,
          data:{
            title:'Header'
          }
        },
        {
          path:'workorder-dashboard',
          component:WorkOrderDashboardComponent,
          data:{
            title:'Header'
          }
        },
        {
          path:'workorder-status',
          component:WorkOrderStatusComponent,
          data:{
            title:'Header'
          }
        },
        {
          path:'workorder-management',
          component:WorkOrderManagementComponent,
          data:{
            title:'Header'
          }
        },
        {
          path:'user-management',
          component:UserManagementComponent,
          data:{
            title:'Header'
          }
        },
        {
          path:'client',
          component:ClientListComponent,
          data:{
            title:'Header'
          }
        },
      
        {
          path:'client-assets',
          component:ClientAssetsComponent,
          data:{
            title:'Header'
          }
        },
  ],
  canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    data:{
      title:'Header'
    }
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

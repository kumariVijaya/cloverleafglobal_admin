import { Component } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-work-order-management',
  templateUrl: './work-order-management.component.html',
  styleUrls: ['./work-order-management.component.scss']
})
export class WorkOrderManagementComponent {
work_order:any;
constructor (
    private restApi: RestApiService,
  ){ }
  ngOnInit(): void {
    this.workOrder();
  }
  public workOrder(){
   
    this.restApi.getWorkOrderList().subscribe((response:any)=>
    {
      
      
      
      console.log(response);
      console.log(response.data[0].id);
      this.work_order=response.data;
      console.log(this.work_order);
      // if(response.status===true)
      // {
      //   this.groups=response;
      //   console.log(response);

        
      // } else  if(!response.body.status===false)
      // {
      //   alert(response.message);
      // }
    });
  }
}

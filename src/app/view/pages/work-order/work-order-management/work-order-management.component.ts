import { Component } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-work-order-management',
  templateUrl: './work-order-management.component.html',
  styleUrls: ['./work-order-management.component.scss']
})
export class WorkOrderManagementComponent {
  users:any;
  work_order:any;
  modal: any;
  temp_work_id:any;
  closeResult: string | undefined;

constructor (
    private restApi: RestApiService,
    private modalService: NgbModal,
    ){ }
  ngOnInit(): void {
    this.getUsersToAssign();
    this.workOrder();
  }
  public workOrder(){
   
    this.restApi.getWorkOrderList().subscribe((response:any)=>
    {
      
      this.work_order=response.data;
     
    });
  }
  // user-list
  public getUsersToAssign(){
    this.restApi.getUserList().subscribe((response:any) => {
      // ada token to localstorage.
      console.log(response.data);
      this.users=response.data;     
    });
    
  }

  open(content: any, size: string= '',work_id:any) {
    this.temp_work_id=work_id;
    this.modal = this.modalService.open(content, { size: size });
    this.modal.result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeGroup(){
    this.modal.close();
    setTimeout(() => {
     
    }, 200);

  }

  assignUser(work_id:any,user_id:any)
  {
 
    this.restApi.assignWork(work_id,user_id).subscribe((response:any) => {
      // ada token to localstorage.
      console.log(response.message);
     if(response.status==true)
     {
      window.location.reload();
     }
      // this.users=response.data;     
    });
    
   
  }
}

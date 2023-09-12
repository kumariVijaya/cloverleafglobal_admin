import { Component } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
client:any;
constructor (
  private restApi: RestApiService,
  ){ }

ngOnInit(): void {
  this.clientList()
}

public clientList()
{
  this.restApi.getClientList().subscribe((response:any)=>
    {
      
      this.client=response.data;
      console.log(this.client);
     
    });
}

}

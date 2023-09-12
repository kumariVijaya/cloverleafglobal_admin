import { Component } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-client-assets',
  templateUrl: './client-assets.component.html',
  styleUrls: ['./client-assets.component.scss']
})
export class ClientAssetsComponent {
users:any;
clientAssets:any;

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
public assetsList(client_id:any)
{
  this.restApi.getAssetsList(client_id).subscribe((response:any)=>
    {
      
      this.clientAssets=response.data;
      // console.log(response.data.length)
      console.log(this.clientAssets);
     
    });
}


}

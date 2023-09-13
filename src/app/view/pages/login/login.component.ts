import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  baseUrl_logo: any;
  baseUrl_truecare: any;
  baseUrl_truesense: any;
  customPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  customEmailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  message_email:any=null;
  message_password:any=null;
   loginData:any={
     email:null,
     password:null
   }

  constructor(
    private restApi: RestApiService,
    private storage : StorageService,
    private router:Router,
    private noty: NotifyService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.baseUrl_logo = environment.base_url+"assets/img/logo video (1).gif";
    this.baseUrl_truecare = environment.base_url+"assets/img/logotrueCare.png";
    this.baseUrl_truesense = environment.base_url+"assets/img/logoTrue.png";
  }

  public login() {
    if(this.loginData.email==''||this.loginData.email==null)
    {
      this.message_email="Email is required";
    }
    else if(!this.customEmailRegex.test(this.loginData.email))
    {
      this.message_email="Email not valid";
    }
    if(this.loginData.password==''||this.loginData.password==null)
    {
      this.message_password="password is required";
    }
    else if(!this.customPasswordRegex.test(this.loginData.password))
    {
      this.message_password="Password must be at least 8 characters, including uppercase, lowercase, digits, and special characters";
    }

    if(this.customEmailRegex.test(this.loginData.email)&&this.customPasswordRegex.test(this.loginData.password)){
     
    this.restApi.login(this.loginData.email,this.loginData.password).subscribe((response:any) => {
      if(response.status){
        this.storage.set('token',response.token) ; 
        this.noty.success(response.message);
        this.router.navigate(['dashboard/workorder-dashboard']);
      }
      if(!response.status)
      {
      this.noty.error(response.message);
      }
    });
  }
    
  }

}

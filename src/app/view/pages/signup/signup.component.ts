import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment.development';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  baseUrl_logo: any;
  baseUrl_truecare: any;
  baseUrl_truesense: any;
  baseUrl: any;
  customPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  customEmailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  message_name:any=null;
  message_email:any=null;
  message_phone:any=null;
  message_password:any=null;
  message_cpassword:any=null;
  user:any={
    name:'',
    email:'',
    phone:'',
    password:'',
    cpassword:'',
  }
  constructor(
    private restApi: RestApiService,
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

  public signup() {
    if(this.user.email==''||this.user.email==null)
    {
      this.message_email="Email is required";
    }
    else if(!this.customEmailRegex.test(this.user.email))
    {
      this.message_email="Email not valid";
    }
    if(this.user.phone==''||this.user.phone==null)
    {
      this.message_phone="Phone number is required";
    }
    if(this.user.name==''||this.user.name==null)
    {
      this.message_name="name is required";
    }
    if(this.user.cpassword==''||this.user.cpassword==null)
    {
      this.message_cpassword="Confirm password is required";
    }
    else if(this.user.password!=this.user.cpassword)
    {
      this.message_cpassword="Confirm password is not matched with password ";
    }
    if(this.user.password==''||this.user.password==null)
    {
      this.message_password="password is required";
    }
    else if(!this.customPasswordRegex.test(this.user.password))
    {
      this.message_password="Password must be at least 8 characters, including uppercase, lowercase, digits, and special characters";
    }

    if(this.customEmailRegex.test(this.user.email)&&this.customPasswordRegex.test(this.user.password)){
     
    this.restApi.signup(this.user).subscribe((response:any) => {
      // ada token to localstorage.
      if(response.status){
        Swal.fire('Successfully done',response.message,'success');
        this.router.navigate(['login']);
      }
      if(!response.status)
      {
      this.noty.error(response.message);
      }
    });
  }
    
  }

}

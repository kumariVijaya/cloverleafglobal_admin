import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  public sound = false;

  constructor(private toaster: ToastrService) {}

  info(msg: string, title: string = '', options: object = {}) {
    this.toaster.info(msg, title, {disableTimeOut: true , ...options});
  }

  success(msg: string, title: string = '', options: object = {}) {
    console.log("succe toast");
    this.toaster.success(msg, title, {disableTimeOut: true , ...options});
  }

  warning(msg: string, title: string = '', options: object = {}) {
    this.toaster.warning(msg, title, {disableTimeOut: true , ...options});
  }

  error(msg: string, title: string = '', options: object = {}) {
     console.log("error toasts");
    this.toaster.error(msg, title, {disableTimeOut: true , ...options});
  }
}

import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _storage : StorageService) { }
  public isLoggedIn(){
    return !!this._storage.get('token');
  }

}

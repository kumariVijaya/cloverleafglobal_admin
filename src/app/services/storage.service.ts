import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public get(key: string) {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  public remove(key: string) {
    return localStorage.removeItem(key);
  }

  public clear() {
    return window.localStorage.clear();
  }
}

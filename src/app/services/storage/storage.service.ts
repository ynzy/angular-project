import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  set(key:string,value:any) {
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key:string) {
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key:string) {
    localStorage.removeItem(key);
  }
}

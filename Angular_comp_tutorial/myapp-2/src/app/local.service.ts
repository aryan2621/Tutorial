import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}
  public setData(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  public getData(key: string) {
    return localStorage.getItem(key);
  }
}

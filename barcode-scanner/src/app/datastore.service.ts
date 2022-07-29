import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  private scans: string[] = [];

  constructor() { 
    const savedData = window.localStorage.getItem('scanArray');
    if (savedData !== null)
      this.scans = JSON.parse(savedData);
  // this.scans = JSON.parse(window.localStorage.getItem('scanArray'));
  }

  AddScan(message: string) {
    this.scans.push(message);
    window.localStorage.setItem('scanArray', JSON.stringify(this.scans));
    this.saveChanges();
  }
  removeItem(i: number) {
    this.scans.splice(i,1);
    window.localStorage.setItem('scanArray', JSON.stringify(this.scans));
    this.saveChanges();
  }
  clear(){
    this.scans = [];
    this.saveChanges();
  }
  getScans() {
    return(this.scans);
  }
  private saveChanges() {
    window.localStorage.setItem('scanArray', JSON.stringify(this.scans));
  }
}

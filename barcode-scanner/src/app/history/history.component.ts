import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public pageTitle: string = "Scan History";

  // barcodeScanned: string [] = ['0123','4567'];

  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    this.datastore.removeItem(index);
  }
  clearHistory() {
    this.datastore.clear();
  }
}

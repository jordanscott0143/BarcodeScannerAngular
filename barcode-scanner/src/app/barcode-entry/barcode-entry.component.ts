import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-barcode-entry',
  templateUrl: './barcode-entry.component.html',
  styleUrls: ['./barcode-entry.component.scss']
})
export class BarcodeEntryComponent implements OnInit {

  public pageTitle: string = "Barcode Entry";

  public quantityCtrl: FormControl = new FormControl(null, Validators.required)
  public barcodeCtrl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(14),
    Validators.pattern('[0-9]+')
  ]);

  entryGroup: FormGroup = new FormGroup({
    quantity: this.quantityCtrl,
    code: this.barcodeCtrl
  });

  constructor(
    private datastore: DatastoreService 
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    if (this.entryGroup.valid) {
      // TODO: process valid form data
      this.datastore.AddScan(`user scanned ${this.quantityCtrl.value} of code ${this.barcodeCtrl.value}`);
      (event.currentTarget as HTMLFormElement).reset();
    }
  }

}

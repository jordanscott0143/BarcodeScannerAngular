import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcodeEntryComponent } from './barcode-entry/barcode-entry.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: 'entry',
    component: BarcodeEntryComponent
  },
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

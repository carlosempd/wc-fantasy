import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }

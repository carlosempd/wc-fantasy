import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './draft.component';
import { DraftRoutingModule } from './draft-routing.module';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';
import { SearchComponent } from './components/search/search.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    DraftComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    DraftRoutingModule,
    ToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class DraftModule { }

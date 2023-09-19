import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './draft.component';
import { DraftRoutingModule } from './draft-routing.module';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';



@NgModule({
  declarations: [
    DraftComponent
  ],
  imports: [
    CommonModule,
    DraftRoutingModule,
    ToolbarModule
  ]
})
export class DraftModule { }

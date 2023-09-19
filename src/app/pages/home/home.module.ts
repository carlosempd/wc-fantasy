import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { InfoComponent } from './components/info/info.component';

import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    HomeRoutingModule,
    MatButtonModule
  ]
})
export class HomeModule { }

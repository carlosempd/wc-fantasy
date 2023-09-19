import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

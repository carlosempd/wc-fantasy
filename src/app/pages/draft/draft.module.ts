import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './draft.component';
import { DraftRoutingModule } from './draft-routing.module';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';
import { SearchComponent } from './components/search/search.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { DraftDialogComponent } from './components/draft-dialog/draft-dialog.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemListModule } from 'src/app/shared/components/item-list/item-list.module';


@NgModule({
  declarations: [
    DraftComponent,
    SearchComponent,
    PlayersListComponent,
    DraftDialogComponent,
    MyTeamComponent
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
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    ItemListModule
  ]
})
export class DraftModule { }

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResponseData } from 'src/app/core/interfaces/apiFootball.interface';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-draft-dialog',
  templateUrl: './draft-dialog.component.html',
  styleUrls: ['./draft-dialog.component.scss']
})
export class DraftDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DraftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { selectedPlayers: ResponseData[]},
    private playerService: PlayerService
  ) {}


  closeDialog() {
    this.dialogRef.close();
  }

  draftAction() {
    this.playerService.draftPlayers(this.data.selectedPlayers);
    this.closeDialog();
  }
}

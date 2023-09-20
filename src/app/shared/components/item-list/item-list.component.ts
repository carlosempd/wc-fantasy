import { Component, Input } from '@angular/core';
import { Player } from 'src/app/core/interfaces/player.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() players: Player[] = [];
  @Input() subheader!: string;

}

import { Component, Input } from '@angular/core';
import { ResponseData } from 'src/app/core/interfaces/apiFootball.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() playersData: ResponseData[] = [];
  @Input() subheader!: string;

}

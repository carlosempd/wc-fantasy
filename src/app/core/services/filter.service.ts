import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterObject } from '../interfaces/utils.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterSubject: Subject<FilterObject> = new Subject<FilterObject>();

  constructor() { }
}

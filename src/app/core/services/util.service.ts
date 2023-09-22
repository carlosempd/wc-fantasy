import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(
    message: string,
    action: string = 'Ok',
    duration: number = 1500,
    type: 'success' | 'default' | 'error' = 'success') {
      this.snackbar.open(message, action, {
        duration,
        panelClass: [`${type}-mat-snack-bar-container`]
      })
  }

  setToLocalStorage(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(<string>localStorage.getItem(key));
  }

  removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}

import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'src/app/core/services/util.service';

describe('UtilService', () => {
	let service: UtilService;
	let snackbarSpy: jasmine.SpyObj<MatSnackBar>;

	beforeEach(() => {
		const snackbarMock = jasmine.createSpyObj('MatSnackBar', ['open']);

		TestBed.configureTestingModule({
			providers: [
				UtilService,
				{ provide: MatSnackBar, useValue: snackbarMock }
			]
		});

		service = TestBed.inject(UtilService);
		snackbarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
	});

	it('should show a success snackbar', () => {
		const message = 'Success message';
		const action = 'Ok';
		const duration = 1500;
		const type = 'success';

		service.showSnackbar(message, action, duration, type);

		expect(snackbarSpy.open).toHaveBeenCalledWith(message, action, {
			duration,
			panelClass: [`${type}-mat-snack-bar-container`]
		});
  });

	it('should set data to local storage', () => {
    const key = 'testKey';
    const data = 'testData';

		spyOn(localStorage, 'setItem');
    service.setToLocalStorage(key, data);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, data);
  });

	it('should remove data from local storage', () => {
    const key = 'testKey';

		spyOn(localStorage, 'removeItem');
    service.removeFromLocalStorage(key);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
  });

})
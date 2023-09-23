import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListComponent } from './players-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';

describe('PlayersListComponent', () => {
  let component: PlayersListComponent;
  let fixture: ComponentFixture<PlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersListComponent ],
      imports: [
        MatDialogModule,
        HttpClientModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatIconModule
      ],
      providers: [
        { provide: MatSnackBar, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the loading spinner when "loadingData" is true', () => {
    component.loadingData = true;
    fixture.detectChanges();
    const loadingSpinner = fixture.debugElement.query(By.css('.loading-shade mat-spinner'));
    expect(loadingSpinner).toBeTruthy();
  });

  it('should render the "draft" button when there are selected items', () => {
    component.selection.select({
      player: {
        id: 0,
        name: '',
        firstname: '',
        lastname: '',
        age: null,
        birth: {
          date: null,
          place: null,
          country: null
        },
        nationality: '',
        height: null,
        weight: null,
        injured: false,
        photo: ''
      },
      statistics: []
    });
    fixture.detectChanges();
    const draftButton = fixture.debugElement.query(By.css('.draft-btn'));
    expect(draftButton).toBeTruthy();
  });

  it('should call the "draftSelection()" function when the "draft" button is clicked', () => {
    spyOn(component, 'draftSelection');
    component.selection.select({
      player: {
        id: 0,
        name: '',
        firstname: '',
        lastname: '',
        age: null,
        birth: {
          date: null,
          place: null,
          country: null
        },
        nationality: '',
        height: null,
        weight: null,
        injured: false,
        photo: ''
      },
      statistics: []
    });
    fixture.detectChanges();
    const draftButton = fixture.debugElement.query(By.css('.draft-btn'));
    draftButton.nativeElement.click();
    expect(component.draftSelection).toHaveBeenCalled();
  });

  it('should render the table with the correct columns', () => {
    const tableColumns = fixture.debugElement.queryAll(By.css('th[mat-header-cell]'));
    expect(tableColumns.length).toBe(5); // Adjust the expected value based on the number of columns in your component
    expect(tableColumns[0].nativeElement.textContent.trim()).toBe('');
    expect(tableColumns[1].nativeElement.textContent.trim()).toBe('Name');
    expect(tableColumns[2].nativeElement.textContent.trim()).toBe('Position');
    expect(tableColumns[3].nativeElement.textContent.trim()).toBe('Age');
    expect(tableColumns[4].nativeElement.textContent.trim()).toBe('Nationality');
  });

});

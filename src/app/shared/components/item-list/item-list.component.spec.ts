import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

import { MatListModule } from '@angular/material/list';


describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ],
      imports: [
        MatListModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

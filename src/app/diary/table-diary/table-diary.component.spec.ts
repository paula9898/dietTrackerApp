import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDiaryComponent } from './table-diary.component';

describe('TableDiaryComponent', () => {
  let component: TableDiaryComponent;
  let fixture: ComponentFixture<TableDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDiaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

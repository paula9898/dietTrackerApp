import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiPageComponent } from './bmi-page.component';

describe('BmiPageComponent', () => {
  let component: BmiPageComponent;
  let fixture: ComponentFixture<BmiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

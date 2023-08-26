import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBacSiComponent } from './add-bac-si.component';

describe('AddBacSiComponent', () => {
  let component: AddBacSiComponent;
  let fixture: ComponentFixture<AddBacSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBacSiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBacSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBacSiComponent } from './edit-bac-si.component';

describe('EditBacSiComponent', () => {
  let component: EditBacSiComponent;
  let fixture: ComponentFixture<EditBacSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBacSiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBacSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

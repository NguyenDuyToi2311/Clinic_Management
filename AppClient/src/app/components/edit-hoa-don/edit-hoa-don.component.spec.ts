import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoaDonComponent } from './edit-hoa-don.component';

describe('EditHoaDonComponent', () => {
  let component: EditHoaDonComponent;
  let fixture: ComponentFixture<EditHoaDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHoaDonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHoaDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

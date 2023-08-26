import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenhNhanComponent } from './edit-benh-nhan.component';

describe('EditBenhNhanComponent', () => {
  let component: EditBenhNhanComponent;
  let fixture: ComponentFixture<EditBenhNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBenhNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

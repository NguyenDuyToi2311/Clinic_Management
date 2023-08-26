import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenhNhanComponent } from './add-benh-nhan.component';

describe('AddBenhNhanComponent', () => {
  let component: AddBenhNhanComponent;
  let fixture: ComponentFixture<AddBenhNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBenhNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

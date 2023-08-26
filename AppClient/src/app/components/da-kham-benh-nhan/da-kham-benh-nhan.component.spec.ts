import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaKhamBenhNhanComponent } from './da-kham-benh-nhan.component';

describe('DaKhamBenhNhanComponent', () => {
  let component: DaKhamBenhNhanComponent;
  let fixture: ComponentFixture<DaKhamBenhNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaKhamBenhNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaKhamBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

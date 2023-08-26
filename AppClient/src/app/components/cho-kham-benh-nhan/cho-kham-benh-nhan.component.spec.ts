import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoKhamBenhNhanComponent } from './cho-kham-benh-nhan.component';

describe('ChoKhamBenhNhanComponent', () => {
  let component: ChoKhamBenhNhanComponent;
  let fixture: ComponentFixture<ChoKhamBenhNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoKhamBenhNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoKhamBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

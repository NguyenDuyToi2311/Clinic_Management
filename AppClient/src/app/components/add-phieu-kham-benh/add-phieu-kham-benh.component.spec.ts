import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhieuKhamBenhComponent } from './add-phieu-kham-benh.component';

describe('AddPhieuKhamBenhComponent', () => {
  let component: AddPhieuKhamBenhComponent;
  let fixture: ComponentFixture<AddPhieuKhamBenhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhieuKhamBenhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhieuKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhieuKhamComponent } from './edit-phieu-kham.component';

describe('EditPhieuKhamComponent', () => {
  let component: EditPhieuKhamComponent;
  let fixture: ComponentFixture<EditPhieuKhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhieuKhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhieuKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

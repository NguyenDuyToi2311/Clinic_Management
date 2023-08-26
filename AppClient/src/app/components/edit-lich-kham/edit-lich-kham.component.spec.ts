import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLichKhamComponent } from './edit-lich-kham.component';

describe('EditLichKhamComponent', () => {
  let component: EditLichKhamComponent;
  let fixture: ComponentFixture<EditLichKhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLichKhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLichKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

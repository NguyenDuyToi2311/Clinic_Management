import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhieuKhamComponent } from './list-phieu-kham.component';

describe('ListPhieuKhamComponent', () => {
  let component: ListPhieuKhamComponent;
  let fixture: ComponentFixture<ListPhieuKhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhieuKhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhieuKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

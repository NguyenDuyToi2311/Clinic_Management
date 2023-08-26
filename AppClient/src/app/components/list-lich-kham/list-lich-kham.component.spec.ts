import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLichKhamComponent } from './list-lich-kham.component';

describe('ListLichKhamComponent', () => {
  let component: ListLichKhamComponent;
  let fixture: ComponentFixture<ListLichKhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLichKhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLichKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHoaDonComponent } from './list-hoa-don.component';

describe('ListHoaDonComponent', () => {
  let component: ListHoaDonComponent;
  let fixture: ComponentFixture<ListHoaDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHoaDonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHoaDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

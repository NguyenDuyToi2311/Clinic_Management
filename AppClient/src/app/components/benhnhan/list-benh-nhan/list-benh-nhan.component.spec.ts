import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBenhNhanComponent } from './list-benh-nhan.component';

describe('ListBenhNhanComponent', () => {
  let component: ListBenhNhanComponent;
  let fixture: ComponentFixture<ListBenhNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBenhNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

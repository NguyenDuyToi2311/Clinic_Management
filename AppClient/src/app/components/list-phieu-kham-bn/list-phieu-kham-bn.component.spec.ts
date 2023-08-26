import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhieuKhamBNComponent } from './list-phieu-kham-bn.component';

describe('ListPhieuKhamBNComponent', () => {
  let component: ListPhieuKhamBNComponent;
  let fixture: ComponentFixture<ListPhieuKhamBNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhieuKhamBNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhieuKhamBNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

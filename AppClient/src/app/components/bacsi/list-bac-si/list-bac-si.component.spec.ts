import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBacSiComponent } from './list-bac-si.component';

describe('ListBacSiComponent', () => {
  let component: ListBacSiComponent;
  let fixture: ComponentFixture<ListBacSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBacSiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBacSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietBacSiComponent } from './chitiet-bac-si.component';

describe('ChitietBacSiComponent', () => {
  let component: ChitietBacSiComponent;
  let fixture: ComponentFixture<ChitietBacSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietBacSiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietBacSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

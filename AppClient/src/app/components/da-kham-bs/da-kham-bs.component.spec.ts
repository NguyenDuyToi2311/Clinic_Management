import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaKhamBSComponent } from './da-kham-bs.component';

describe('DaKhamBSComponent', () => {
  let component: DaKhamBSComponent;
  let fixture: ComponentFixture<DaKhamBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaKhamBSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaKhamBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

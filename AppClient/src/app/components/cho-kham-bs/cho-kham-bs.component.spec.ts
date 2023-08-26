import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoKhamBSComponent } from './cho-kham-bs.component';

describe('ChoKhamBSComponent', () => {
  let component: ChoKhamBSComponent;
  let fixture: ComponentFixture<ChoKhamBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoKhamBSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoKhamBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

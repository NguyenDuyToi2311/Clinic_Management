import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBenhNhanComponent } from './profile-benh-nhan.component';

describe('ProfileBenhNhanComponent', () => {
  let component: ProfileBenhNhanComponent;
  let fixture: ComponentFixture<ProfileBenhNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBenhNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

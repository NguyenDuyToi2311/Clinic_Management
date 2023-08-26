import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBSComponent } from './profile-bs.component';

describe('ProfileBSComponent', () => {
  let component: ProfileBSComponent;
  let fixture: ComponentFixture<ProfileBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

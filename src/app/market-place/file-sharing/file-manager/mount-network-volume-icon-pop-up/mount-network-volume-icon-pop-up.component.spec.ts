import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountNetworkVolumeIconPopUpComponent } from './mount-network-volume-icon-pop-up.component';

describe('MountNetworkVolumeIconPopUpComponent', () => {
  let component: MountNetworkVolumeIconPopUpComponent;
  let fixture: ComponentFixture<MountNetworkVolumeIconPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MountNetworkVolumeIconPopUpComponent]
    });
    fixture = TestBed.createComponent(MountNetworkVolumeIconPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

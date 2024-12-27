import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChannelTwoFactorComponent } from './multi-channel-two-factor.component';

describe('MultiChannelTwoFactorComponent', () => {
  let component: MultiChannelTwoFactorComponent;
  let fixture: ComponentFixture<MultiChannelTwoFactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiChannelTwoFactorComponent]
    });
    fixture = TestBed.createComponent(MultiChannelTwoFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

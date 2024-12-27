import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipsTabComponent } from './payslips-tab.component';

describe('PayslipsTabComponent', () => {
  let component: PayslipsTabComponent;
  let fixture: ComponentFixture<PayslipsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayslipsTabComponent]
    });
    fixture = TestBed.createComponent(PayslipsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

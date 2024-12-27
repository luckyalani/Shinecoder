import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportGeneralComponent } from './support-general.component';

describe('SupportGeneralComponent', () => {
  let component: SupportGeneralComponent;
  let fixture: ComponentFixture<SupportGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportGeneralComponent]
    });
    fixture = TestBed.createComponent(SupportGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

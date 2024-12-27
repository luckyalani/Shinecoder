import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEmailPipingComponent } from './support-email-piping.component';

describe('SupportEmailPipingComponent', () => {
  let component: SupportEmailPipingComponent;
  let fixture: ComponentFixture<SupportEmailPipingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportEmailPipingComponent]
    });
    fixture = TestBed.createComponent(SupportEmailPipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

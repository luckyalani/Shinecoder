import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebToLeadComponent } from './web-to-lead.component';

describe('WebToLeadComponent', () => {
  let component: WebToLeadComponent;
  let fixture: ComponentFixture<WebToLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebToLeadComponent]
    });
    fixture = TestBed.createComponent(WebToLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

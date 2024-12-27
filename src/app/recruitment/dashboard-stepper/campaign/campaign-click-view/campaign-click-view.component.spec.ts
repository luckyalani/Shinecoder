import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignClickViewComponent } from './campaign-click-view.component';

describe('CampaignClickViewComponent', () => {
  let component: CampaignClickViewComponent;
  let fixture: ComponentFixture<CampaignClickViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignClickViewComponent]
    });
    fixture = TestBed.createComponent(CampaignClickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

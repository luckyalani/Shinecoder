import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCreateExemptionsComponent } from './bulk-create-exemptions.component';

describe('BulkCreateExemptionsComponent', () => {
  let component: BulkCreateExemptionsComponent;
  let fixture: ComponentFixture<BulkCreateExemptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkCreateExemptionsComponent]
    });
    fixture = TestBed.createComponent(BulkCreateExemptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

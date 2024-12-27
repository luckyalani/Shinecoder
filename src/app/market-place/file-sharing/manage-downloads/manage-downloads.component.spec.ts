import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDownloadsComponent } from './manage-downloads.component';

describe('ManageDownloadsComponent', () => {
  let component: ManageDownloadsComponent;
  let fixture: ComponentFixture<ManageDownloadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDownloadsComponent]
    });
    fixture = TestBed.createComponent(ManageDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

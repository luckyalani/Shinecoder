import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBackupPopupComponent } from './auto-backup-popup.component';

describe('AutoBackupPopupComponent', () => {
  let component: AutoBackupPopupComponent;
  let fixture: ComponentFixture<AutoBackupPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoBackupPopupComponent]
    });
    fixture = TestBed.createComponent(AutoBackupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UninstallComponent } from './uninstall.component';

describe('UninstallComponent', () => {
  let component: UninstallComponent;
  let fixture: ComponentFixture<UninstallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UninstallComponent]
    });
    fixture = TestBed.createComponent(UninstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledComponent } from './installed.component';

describe('InstalledComponent', () => {
  let component: InstalledComponent;
  let fixture: ComponentFixture<InstalledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstalledComponent]
    });
    fixture = TestBed.createComponent(InstalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

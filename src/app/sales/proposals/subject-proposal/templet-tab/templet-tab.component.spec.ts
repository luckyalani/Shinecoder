import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletTabComponent } from './templet-tab.component';

describe('TempletTabComponent', () => {
  let component: TempletTabComponent;
  let fixture: ComponentFixture<TempletTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempletTabComponent]
    });
    fixture = TestBed.createComponent(TempletTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

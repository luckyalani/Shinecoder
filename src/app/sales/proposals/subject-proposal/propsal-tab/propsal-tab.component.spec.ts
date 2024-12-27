import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsalTabComponent } from './propsal-tab.component';

describe('PropsalTabComponent', () => {
  let component: PropsalTabComponent;
  let fixture: ComponentFixture<PropsalTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropsalTabComponent]
    });
    fixture = TestBed.createComponent(PropsalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTabsComponent } from './contract-tabs.component';

describe('ContractTabsComponent', () => {
  let component: ContractTabsComponent;
  let fixture: ComponentFixture<ContractTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractTabsComponent]
    });
    fixture = TestBed.createComponent(ContractTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

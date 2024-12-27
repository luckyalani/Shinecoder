import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractViewComponent } from './contract-view.component';

describe('ContractViewComponent', () => {
  let component: ContractViewComponent;
  let fixture: ComponentFixture<ContractViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractViewComponent]
    });
    fixture = TestBed.createComponent(ContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

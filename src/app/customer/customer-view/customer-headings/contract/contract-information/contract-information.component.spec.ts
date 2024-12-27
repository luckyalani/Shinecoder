import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractInformationComponent } from './contract-information.component';

describe('ContractInformationComponent', () => {
  let component: ContractInformationComponent;
  let fixture: ComponentFixture<ContractInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractInformationComponent]
    });
    fixture = TestBed.createComponent(ContractInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

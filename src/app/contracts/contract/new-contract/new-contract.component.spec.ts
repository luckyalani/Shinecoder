import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContractComponent } from './new-contract.component';

describe('NewContractComponent', () => {
  let component: NewContractComponent;
  let fixture: ComponentFixture<NewContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewContractComponent]
    });
    fixture = TestBed.createComponent(NewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDealComponent } from './edit-deal.component';

describe('EditDealComponent', () => {
  let component: EditDealComponent;
  let fixture: ComponentFixture<EditDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDealComponent]
    });
    fixture = TestBed.createComponent(EditDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

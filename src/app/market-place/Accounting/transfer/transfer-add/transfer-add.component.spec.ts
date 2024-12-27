import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAddComponent } from './transfer-add.component';

describe('TransferAddComponent', () => {
  let component: TransferAddComponent;
  let fixture: ComponentFixture<TransferAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferAddComponent]
    });
    fixture = TestBed.createComponent(TransferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

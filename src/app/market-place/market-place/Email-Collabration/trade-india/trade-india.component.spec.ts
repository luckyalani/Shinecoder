import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeIndiaComponent } from './trade-india.component';

describe('TradeIndiaComponent', () => {
  let component: TradeIndiaComponent;
  let fixture: ComponentFixture<TradeIndiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeIndiaComponent]
    });
    fixture = TestBed.createComponent(TradeIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

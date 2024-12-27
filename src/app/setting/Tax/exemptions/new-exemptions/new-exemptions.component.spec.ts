import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExemptionsComponent } from './new-exemptions.component';

describe('NewExemptionsComponent', () => {
  let component: NewExemptionsComponent;
  let fixture: ComponentFixture<NewExemptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExemptionsComponent]
    });
    fixture = TestBed.createComponent(NewExemptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

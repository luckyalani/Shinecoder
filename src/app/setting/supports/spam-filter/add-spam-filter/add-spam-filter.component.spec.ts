import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpamFilterComponent } from './add-spam-filter.component';

describe('AddSpamFilterComponent', () => {
  let component: AddSpamFilterComponent;
  let fixture: ComponentFixture<AddSpamFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSpamFilterComponent]
    });
    fixture = TestBed.createComponent(AddSpamFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

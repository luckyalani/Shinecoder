import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreativesComponent } from './add-creatives.component';

describe('AddCreativesComponent', () => {
  let component: AddCreativesComponent;
  let fixture: ComponentFixture<AddCreativesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCreativesComponent]
    });
    fixture = TestBed.createComponent(AddCreativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

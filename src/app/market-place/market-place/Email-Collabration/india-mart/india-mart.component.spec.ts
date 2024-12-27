import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaMartComponent } from './india-mart.component';

describe('IndiaMartComponent', () => {
  let component: IndiaMartComponent;
  let fixture: ComponentFixture<IndiaMartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiaMartComponent]
    });
    fixture = TestBed.createComponent(IndiaMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

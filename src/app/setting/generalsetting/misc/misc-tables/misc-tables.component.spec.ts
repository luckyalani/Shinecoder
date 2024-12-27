import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscTablesComponent } from './misc-tables.component';

describe('MiscTablesComponent', () => {
  let component: MiscTablesComponent;
  let fixture: ComponentFixture<MiscTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscTablesComponent]
    });
    fixture = TestBed.createComponent(MiscTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

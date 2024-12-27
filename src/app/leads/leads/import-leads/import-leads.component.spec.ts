import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLeadsComponent } from './import-leads.component';

describe('ImportLeadsComponent', () => {
  let component: ImportLeadsComponent;
  let fixture: ComponentFixture<ImportLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLeadsComponent]
    });
    fixture = TestBed.createComponent(ImportLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

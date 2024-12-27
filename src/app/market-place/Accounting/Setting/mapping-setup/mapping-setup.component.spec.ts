import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingSetupComponent } from './mapping-setup.component';

describe('MappingSetupComponent', () => {
  let component: MappingSetupComponent;
  let fixture: ComponentFixture<MappingSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappingSetupComponent]
    });
    fixture = TestBed.createComponent(MappingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

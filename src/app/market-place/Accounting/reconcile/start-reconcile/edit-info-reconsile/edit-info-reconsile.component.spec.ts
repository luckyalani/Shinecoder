import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoReconsileComponent } from './edit-info-reconsile.component';

describe('EditInfoReconsileComponent', () => {
  let component: EditInfoReconsileComponent;
  let fixture: ComponentFixture<EditInfoReconsileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInfoReconsileComponent]
    });
    fixture = TestBed.createComponent(EditInfoReconsileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

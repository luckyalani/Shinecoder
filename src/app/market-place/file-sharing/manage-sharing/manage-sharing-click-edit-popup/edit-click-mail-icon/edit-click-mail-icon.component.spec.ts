import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClickMailIconComponent } from './edit-click-mail-icon.component';

describe('EditClickMailIconComponent', () => {
  let component: EditClickMailIconComponent;
  let fixture: ComponentFixture<EditClickMailIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClickMailIconComponent]
    });
    fixture = TestBed.createComponent(EditClickMailIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

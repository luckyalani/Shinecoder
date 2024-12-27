import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaEditComponent } from './cedula-edit.component';

describe('CedulaEditComponent', () => {
  let component: CedulaEditComponent;
  let fixture: ComponentFixture<CedulaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CedulaEditComponent]
    });
    fixture = TestBed.createComponent(CedulaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

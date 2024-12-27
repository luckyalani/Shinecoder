import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomFeildComponent } from './new-custom-feild.component';

describe('NewCustomFeildComponent', () => {
  let component: NewCustomFeildComponent;
  let fixture: ComponentFixture<NewCustomFeildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCustomFeildComponent]
    });
    fixture = TestBed.createComponent(NewCustomFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDeveloperComponent } from './contact-developer.component';

describe('ContactDeveloperComponent', () => {
  let component: ContactDeveloperComponent;
  let fixture: ComponentFixture<ContactDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDeveloperComponent]
    });
    fixture = TestBed.createComponent(ContactDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

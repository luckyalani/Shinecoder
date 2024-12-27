import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNotificationsComponent } from './add-new-notifications.component';

describe('AddNewNotificationsComponent', () => {
  let component: AddNewNotificationsComponent;
  let fixture: ComponentFixture<AddNewNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewNotificationsComponent]
    });
    fixture = TestBed.createComponent(AddNewNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

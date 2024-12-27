import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAccountComponent } from './invite-account.component';

describe('InviteAccountComponent', () => {
  let component: InviteAccountComponent;
  let fixture: ComponentFixture<InviteAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteAccountComponent]
    });
    fixture = TestBed.createComponent(InviteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

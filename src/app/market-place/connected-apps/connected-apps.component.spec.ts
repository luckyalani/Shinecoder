import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedAppsComponent } from './connected-apps.component';

describe('ConnectedAppsComponent', () => {
  let component: ConnectedAppsComponent;
  let fixture: ComponentFixture<ConnectedAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectedAppsComponent]
    });
    fixture = TestBed.createComponent(ConnectedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

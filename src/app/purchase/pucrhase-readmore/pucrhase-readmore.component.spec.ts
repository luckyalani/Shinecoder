import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PucrhaseReadmoreComponent } from './pucrhase-readmore.component';

describe('PucrhaseReadmoreComponent', () => {
  let component: PucrhaseReadmoreComponent;
  let fixture: ComponentFixture<PucrhaseReadmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PucrhaseReadmoreComponent]
    });
    fixture = TestBed.createComponent(PucrhaseReadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateCardrequest } from './initiate-cardrequest';

describe('InitiateCardrequest', () => {
  let component: InitiateCardrequest;
  let fixture: ComponentFixture<InitiateCardrequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiateCardrequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateCardrequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

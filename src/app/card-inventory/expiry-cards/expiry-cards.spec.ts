import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryCards } from './expiry-cards';

describe('ExpiryCards', () => {
  let component: ExpiryCards;
  let fixture: ComponentFixture<ExpiryCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiryCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiryCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

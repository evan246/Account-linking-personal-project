import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedCardsComponent } from './issued-cards';

describe('IssuedCards', () => {
  let component: IssuedCardsComponent;
  let fixture: ComponentFixture<IssuedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuedCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

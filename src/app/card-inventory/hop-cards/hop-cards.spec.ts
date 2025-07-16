import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopCards } from './hop-cards';

describe('HopCards', () => {
  let component: HopCards;
  let fixture: ComponentFixture<HopCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HopCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

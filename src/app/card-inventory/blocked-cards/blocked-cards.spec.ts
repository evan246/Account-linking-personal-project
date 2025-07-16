import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedCards } from './blocked-cards';

describe('BlockedCards', () => {
  let component: BlockedCards;
  let fixture: ComponentFixture<BlockedCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockedCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventory } from './card-inventory';

describe('CardInventory', () => {
  let component: CardInventory;
  let fixture: ComponentFixture<CardInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

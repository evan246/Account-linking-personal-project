import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCards } from './available-cards';

describe('AvailableCards', () => {
  let component: AvailableCards;
  let fixture: ComponentFixture<AvailableCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

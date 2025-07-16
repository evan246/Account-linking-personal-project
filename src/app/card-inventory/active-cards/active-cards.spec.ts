import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCards } from './active-cards';

describe('ActiveCards', () => {
  let component: ActiveCards;
  let fixture: ComponentFixture<ActiveCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

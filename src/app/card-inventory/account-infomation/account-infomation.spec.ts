import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfomation } from './account-infomation';

describe('AccountInfomation', () => {
  let component: AccountInfomation;
  let fixture: ComponentFixture<AccountInfomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInfomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInfomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

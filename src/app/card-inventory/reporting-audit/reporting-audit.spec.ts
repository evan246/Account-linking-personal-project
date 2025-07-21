import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingAudit } from './reporting-audit';

describe('ReportingAudit', () => {
  let component: ReportingAudit;
  let fixture: ComponentFixture<ReportingAudit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportingAudit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingAudit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

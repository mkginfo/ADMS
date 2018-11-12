import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnalyzerComponent } from './report-analyzer.component';

describe('ReportAnalyzerComponent', () => {
  let component: ReportAnalyzerComponent;
  let fixture: ComponentFixture<ReportAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportAnalyzerRoutingModule } from './report-analyzer-routing.module';
import { ReportAnalyzerComponent } from './report-analyzer.component';

@NgModule({
  declarations: [ReportAnalyzerComponent],
  imports: [
    CommonModule,
    ReportAnalyzerRoutingModule
  ]
})
export class ReportAnalyzerModule { }

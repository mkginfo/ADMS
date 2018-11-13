import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ReportAnalyzerRoutingModule } from './report-analyzer-routing.module';
import { ReportAnalyzerComponent } from './report-analyzer.component';


@NgModule({
  declarations: [ReportAnalyzerComponent],
  imports: [
    SharedModule,
    ReportAnalyzerRoutingModule
  ]
})
export class ReportAnalyzerModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportAnalyzerComponent } from './report-analyzer.component';

const routes: Routes = [
  {
    path: '',
    component: ReportAnalyzerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportAnalyzerRoutingModule { }

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class ChartComponent {
  @Input() public showLegend: boolean = true;
  @Input() public options: BaseChartDirective['options'];
  @Input() public type: BaseChartDirective['type'] = 'bar';
  @Input() public data: ChartConfiguration<'bar'>['data'] = {
    datasets: [],
  };
}

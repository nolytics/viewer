import type { VisitorsSummary } from '@data';
import type { ChartConfiguration, ChartData } from 'chart.js';

export function visitorsPercentageSummaryPieChartConfig(
	summary: VisitorsSummary
): ChartConfiguration {
	const data = <ChartData>{
		labels: ['Mobile', 'Non-Mobile'],
		datasets: [
			{
				data: [summary.mobileVisitorsPercentage, summary.nonMobileVisitorsPercentage],
				backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
				hoverOffset: 41,
				borderRadius: 5
			}
		]
	};

	const config = <ChartConfiguration>{
		type: 'doughnut',
		data: data
	};

	return config;
}

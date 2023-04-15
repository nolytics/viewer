import type { VisitorsCountrySummary } from '@data';
import type { ChartConfiguration, ChartData } from 'chart.js';

export function visitorsCountrySummaryBarChartConfig(
	summary: VisitorsCountrySummary
): ChartConfiguration {
	const data = <ChartData>{
		labels: summary.map((x) => x.country),
		datasets: [
			{
				data: summary.map((x) => x.uniqueVisitorsCount),
				label: 'Unique Visitors',
				backgroundColor: ['rgb(255, 99, 132)'],
				hoverOffset: 41,
				borderRadius: 5
			}
		]
	};

	const config = <ChartConfiguration>{
		type: 'bar',
		data: data
	};

	return config;
}

import type { VisitorsSummary } from '@data';
import type { ChartConfiguration, ChartData, ChartType, TooltipItem } from 'chart.js';

export function visitorsPercentageSummaryBarChartConfig(
	summary: VisitorsSummary
): ChartConfiguration {
	const data = <ChartData>{
		labels: ['Mobile', 'Non-Mobile'],
		datasets: [
			{
				data: [summary.allMobileVisitorsPercentage, summary.allNonMobileVisitorsPercentage],
				backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
				hoverOffset: 41,
				borderRadius: 5
			}
		],
	};

	const config = <ChartConfiguration>{
		type: 'doughnut',
		data: data,
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (item: TooltipItem<ChartType>) {
							const percentage = item.dataset.data[item.dataIndex] as number;

							return `${(percentage * 100).toFixed()}%`;
						}
					}
				}
			}
		},
	};

	return config;
}

import type { VisitorsSummary } from '@data';
import type { ChartConfiguration, ChartData, ChartType, TooltipItem } from 'chart.js';

export function visitorsPercentageSummaryBarChartConfig(
	summary: VisitorsSummary
): ChartConfiguration {
	const stackedSummary = [
		{
			count: summary.allMobileVisitorsCount,
			percentage: summary.allMobileVisitorsPercentage,
		},
		{
			count: summary.allNonMobileVisitorsCount,
			percentage: summary.allNonMobileVisitorsPercentage
		},
		{
			count: summary.uniqueMobileVisitorsCount,
			percentage: summary.uniqueMobileVisitorsPercentage,
		},
		{
			count: summary.uniqueNonMobileVisitorsCount,
			percentage: summary.uniqueNonMobileVisitorsPercentage,
		}
	];

	const data = <ChartData>{
		labels: ['Mobile', 'Non-Mobile'],
		datasets: [
			{
				data: stackedSummary.slice(0, 2).map((x) => x.percentage),
				label: 'All',
				backgroundColor: ['rgb(255, 99, 132)'],
				hoverOffset: 41,
				borderRadius: 5,
				stack: 'All',
			},
			{
				data: stackedSummary.slice(2).map((x) => x.percentage),
				label: 'Unique',
				backgroundColor: ['rgb(54, 162, 235)'],
				hoverOffset: 41,
				borderRadius: 5,
				stack: 'Unique',
			}
		],
	};

	const config = <ChartConfiguration>{
		type: 'bar',
		data: data,
		options: {
			scales: {
				x: {
					stacked: true,
				},
			},
			plugins: {
				tooltip: {
					callbacks: {
						label: function (item: TooltipItem<ChartType>) {
							const stackedIndex = item.dataIndex + (item.datasetIndex * 2);

							const percentage = (item.dataset.data[item.dataIndex] as number) * 100;
							const count = stackedSummary[stackedIndex].count;

							return `${percentage.toFixed()}% (${count})`;
						},
					},
				},
			}
		},
	};

	return config;
}

import type { VisitorsCountrySummary } from '@data';
import type { ChartConfiguration, ChartData, ChartType, TooltipItem } from 'chart.js';

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
				borderRadius: 5,
			}
		],
	};

	const config = <ChartConfiguration>{
		type: 'bar',
		data: data,

		// plugins: {
		// 	tooltip: {
		// 		callbacks: {
		// 			label: function (item: TooltipItem<ChartType>) {
		// 				const stackedIndex = item.dataIndex + item.datasetIndex * 2;

		// 				const percentage = (item.dataset.data[item.dataIndex] as number) * 100;
		// 				const count = stackedSummary[stackedIndex].count;

		// 				return `${percentage.toFixed()}% (${count})`;
		// 			}
		// 		}
		// 	}
		// }
	};

	return config;
};
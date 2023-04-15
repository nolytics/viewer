<script lang="ts">
	import type { VisitorsDeviceSummary, VisitorsSummary } from '@data';
	import {
		Chart,
		Title,
		Tooltip,
		Legend,
		CategoryScale,
		BarController,
		LinearScale,
		BarElement
	} from 'chart.js';
	import { onMount } from 'svelte';
	import { visitorsDeviceSummaryBarChartConfig } from './config';

	Chart.register(BarController, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

	export let value: VisitorsDeviceSummary;
	const id = 'visitors-device-summary-bar-chart';

	onMount(() => new Chart(id, visitorsDeviceSummaryBarChartConfig(value)));
</script>

<div class="overflow-hidden text-center h-fit">
	Percentage of mobile vs non-mobile visitors (all/unique page hits)
	<canvas {id} />
</div>

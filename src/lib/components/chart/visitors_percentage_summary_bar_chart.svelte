<script lang="ts">
	import type { VisitorsSummary } from '@data';
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
	import { visitorsPercentageSummaryBarChartConfig } from './config';

	Chart.register(BarController, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

	export let value: VisitorsSummary;
	const id = 'visitors-percentage-summary-bar-chart';

	onMount(() => new Chart(id, visitorsPercentageSummaryBarChartConfig(value)));
</script>

<div class="overflow-hidden text-center h-fit">
	Percentage of mobile vs non-mobile visitors (all/unique page hits)
	<canvas {id} />
</div>

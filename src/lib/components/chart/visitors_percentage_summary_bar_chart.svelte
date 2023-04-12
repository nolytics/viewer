<script lang="ts">
	import type { VisitorsSummary } from '@data';
	import {
		Chart,
		ArcElement,
		Title,
		Tooltip,
		Legend,
		CategoryScale,
		DoughnutController
	} from 'chart.js';
	import { onMount } from 'svelte';
	import { visitorsPercentageSummaryBarChartConfig } from './config';

	Chart.register(DoughnutController, Title, Tooltip, Legend, ArcElement, CategoryScale);

	export let value: VisitorsSummary;
	const id = 'visitors-percentage-summary-bar-chart';

	onMount(() => new Chart(id, visitorsPercentageSummaryBarChartConfig(value)));
</script>

<div class="overflow-hidden text-center h-fit">
	Percentage of mobile vs non-mobile visitors
	<canvas {id} />
</div>

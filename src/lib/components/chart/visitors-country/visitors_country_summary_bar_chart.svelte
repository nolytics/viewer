<script lang="ts">
	import type { VisitorsCountrySummary } from '@data';
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
	import { visitorsCountrySummaryBarChartConfig } from './config';

	Chart.register(BarController, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

	export let value: VisitorsCountrySummary;
	const id = 'visitors-country-summary-bar-chart';

	onMount(() => new Chart(id, visitorsCountrySummaryBarChartConfig(value)));
</script>

<div class="overflow-hidden text-center h-fit">
	Percentage of mobile vs non-mobile visitors (all/unique page hits)
	<canvas {id} />
</div>

<script lang="ts">
	import {
		MetadataHeader,
		PageHitCountTable,
		VisitorsCountrySummaryBarChart,
		VisitorsDeviceSummaryBarChart
	} from '@components';
	import { NolyticsStore } from '@stores';
	import { onMount } from 'svelte';

	onMount(() => {
		NolyticsStore.read();
	});
</script>

<body>
	{#if $NolyticsStore.success}
		<MetadataHeader value={$NolyticsStore.value.metadata} />

		<div class="flex flex-col sm:flex-row sm:justify-around">
			<VisitorsDeviceSummaryBarChart value={$NolyticsStore.value.visitorsSummary.devices} />
			<VisitorsCountrySummaryBarChart value={$NolyticsStore.value.visitorsSummary.countries} />
		</div>

		<PageHitCountTable
			hits={$NolyticsStore.value.hitsSummary.slice(0, 10)}
			highlightTopPages={true}
			highlightPagesCount={10}
		/>
	{/if}
</body>

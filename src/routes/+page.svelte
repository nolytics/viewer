<script lang="ts">
	import {
		MetadataHeader,
		PageHitCountTable,
		VisitorsPercentageSummaryBarChart
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

		<div class="flex flex-row justify-center">
			<VisitorsPercentageSummaryBarChart value={$NolyticsStore.value.visitorsSummary} />
		</div>

		<PageHitCountTable
			hits={$NolyticsStore.value.hitsSummary.slice(0, 10)}
			highlightTopPages={true}
			highlightPagesCount={10}
		/>
	{/if}
</body>

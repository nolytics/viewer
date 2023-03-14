<script lang="ts">
	import {
		MetadataHeader,
		PageHitCountTable,
		VisitorsPercentageSummaryPieChart
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
			<VisitorsPercentageSummaryPieChart value={$NolyticsStore.value.visitorsSummary} />
		</div>

		<PageHitCountTable hits={$NolyticsStore.value.hitsSummary} />
	{/if}
</body>

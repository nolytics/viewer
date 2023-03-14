<script lang="ts">
	import { MetadataHeader, PageHitCountTable } from '@components';
	import { NolyticsStore } from '@stores';
	import { onMount } from 'svelte';

	onMount(() => {
		NolyticsStore.read();
	});
</script>

<body>
	<div class="text-center">
		{#if $NolyticsStore.success}
			<MetadataHeader value={$NolyticsStore.value.metadata} />
		{/if}
	</div>
	{#if $NolyticsStore.success}
		<PageHitCountTable hits={$NolyticsStore.value.hitsSummary} />
	{/if}
</body>

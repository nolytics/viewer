<script lang="ts">
	import { PageHitCountTable } from '@components';
	import { NolyticsStore } from '@stores';
	import { onMount } from 'svelte';

	onMount(() => {
		NolyticsStore.read();
	});
</script>

<body>
	{#if $NolyticsStore.success}
		<PageHitCountTable hits={$NolyticsStore.value.hitsSummary} />
	{/if}
</body>

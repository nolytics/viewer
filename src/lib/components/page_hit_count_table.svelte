<script lang="ts">
	import type { HitsSummary, PageHitsSummary } from '@data';
	import { onMobileBreakpoint } from '@media-query';
	import { BreakpointStore } from '@stores';
	import { onMount } from 'svelte';

	export let hits: HitsSummary;
	export let highlightTopPages: boolean = false;
	export let highlightPagesCount: number = 10;

	$: totalHitsCount = hits[0].hitsCount;
	$: hitCountFillPercentage = (hit: PageHitsSummary) => (hit.hitsCount / totalHitsCount) * 100;

	onMount(() => {
		BreakpointStore.subscribe(() => {
			if (!onMobileBreakpoint()) {
				totalHitsCount = hits[0].hitsCount * 1.5;
			} else {
				totalHitsCount = hits[0].hitsCount;
			}
		});

		BreakpointStore.listen();
	});
</script>

<div class="flex w-full overflow-x-auto mt-5">
	<table id="page-hit-count-table-global" class="table">
		<thead>
			<tr>
				<th>Path</th>
				<th>Hit Count</th>
			</tr>
		</thead>
		<tbody>
			{#each hits as hit, index}
				<tr>
					<td>
						{#if highlightTopPages && index < highlightPagesCount}
							<div
								class="td-div"
								style="--fill-percentage: {hitCountFillPercentage(hit).toFixed()}%;"
							>
								{hit.pageId}
							</div>
						{:else}
							{hit.pageId}
						{/if}
					</td>
					<td>
						{hit.hitsCount}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.td-div {
		color: #fff;

		padding-left: 0.5%;

		border-radius: 0.5ch;

		background-color: rgb(255, 99, 132);
		width: var(--fill-percentage);
		line-height: 200%;
	}
</style>

<script lang="ts">
	import type { HitsSummary } from '@data';

	export let hits: HitsSummary;
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
			{#each hits as hit}
				<tr>
					<td>
						{hit.pageId}
					</td>
					<td>
						{hit.hitsCount}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

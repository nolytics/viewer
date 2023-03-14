<script lang="ts">
	import type { NolyticsMetadata } from '@data';

	export let value: NolyticsMetadata;
</script>

<div class="text-center">
	<p class="text-3xl">Nolytics Summary</p>
	<p>
		Website:
		<a class="link link-primary" href={value.websiteUrl}>
			{value.websiteUrl}
		</a>
	</p>

	<p>
		Last updated:
		<b>{new Date(value.lastUpdatedMS).toLocaleDateString()}</b>
	</p>
</div>

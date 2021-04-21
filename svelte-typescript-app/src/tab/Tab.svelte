<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<li class:is-active="{$selectedTab === tab}" on:click="{() => selectTab(tab)}"><a>
	<slot></slot>
</a></li>
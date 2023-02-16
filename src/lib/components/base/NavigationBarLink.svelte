<script lang="ts">
  // Not having dynamic imports is a pain for the dev,
  // but it's the best way that I found to get max performance

  import { page } from '$app/stores';
  import HomeF0W5S24 from '$lib/icons/home-f0-w5-s24.svelte';
  import HomeF1W5S24 from '$lib/icons/home-f1-w5-s24.svelte';
  import SearchF0W5S24 from '$lib/icons/search-f0-w5-s24.svelte';
  import SearchF1W5S24 from '$lib/icons/search-f1-w5-s24.svelte';
  import FolderF0W5S24 from '$lib/icons/folder-f0-w5-s24.svelte';
  import FolderF1W5S24 from '$lib/icons/folder-f1-w5-s24.svelte';

  export let active: boolean = false;
  export let name: string;
  export let href: string;
  export let showName: boolean;

  $: active = $page.route.id === href;
</script>

<a
  class="label-medium flex flex-col items-center justify-center gap-1 transition-colors duration-300 {active
    ? 'nav-item-container-active'
    : 'nav-item-container-inactive'}"
  {href}>
  <div
    class="h-8 w-16 rounded-full  {active
      ? 'active-indicator-active'
      : 'active-indicator-inactive'} flex items-center justify-center transition-colors duration-300">
    {#if name === 'Home'}
      <div />
      {#if active}
        <HomeF1W5S24 />
      {:else}
        <HomeF0W5S24 />
      {/if}
    {:else if name === 'Search'}
      {#if active}
        <SearchF1W5S24 />
      {:else}
        <SearchF0W5S24 />
      {/if}
    {:else if name === 'Library'}
      {#if active}
        <FolderF1W5S24 />
      {:else}
        <FolderF0W5S24 />
      {/if}
    {/if}
  </div>
  {#if showName}
    <span class="label-medium text-center">{name}</span>
  {:else}
    <span class="sr-only">{name}</span>
  {/if}
</a>

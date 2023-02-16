<script lang="ts">
  import '../app.scss';
  import Navigation from '$lib/components/layout/NavigationBar.svelte';
  import TopAppBar from '$lib/components/layout/TopAppBar.svelte';
</script>

<TopAppBar />
<Navigation />

<div class="container mx-auto px-4 sm:px-0">
  <slot />
</div>

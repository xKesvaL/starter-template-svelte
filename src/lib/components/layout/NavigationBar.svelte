<script lang="ts">
  // https://m3.material.io/components/navigation-bar/specs
  // Elevation level: 2

  import NavigationBarLink from '$lib/components/base/NavigationBarLink.svelte';

  let active = 0;
  let names = ['Home', 'Search', 'Library', 'Profile'];
  let hrefs = ['/', '/search', '/library', '/profile'];
  let showName = false;
</script>

<nav class="nav-container fixed bottom-0 left-0 right-0 {showName ? 'h-20' : 'h-16'} sm:hidden">
  <div class="flex h-full items-center justify-around pt-3 pb-4 ">
    {#each names as name, i}
      <NavigationBarLink active={i === active} {name} href={hrefs[i]} {showName} />
    {/each}
  </div>
</nav>

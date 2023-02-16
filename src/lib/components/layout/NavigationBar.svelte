<script lang="ts">
  // https://m3.material.io/components/navigation-bar/specs
  // Elevation level: 2

  import NavigationBarLink from '$lib/components/base/NavigationBarLink.svelte';

  let active = 0;
  let names = ['Home', 'Search', 'Profile'];
  let hrefs = ['/', '/search', '/profile'];
</script>

<nav class="nav-container fixed bottom-0 left-0 right-0 h-20 sm:hidden">
  <div class="flex h-full items-center justify-evenly pt-3 pb-4 ">
    {#each Array(3) as _, i}
      <NavigationBarLink active={i === active} name={names[i]} href={hrefs[i]} />
    {/each}
  </div>
</nav>

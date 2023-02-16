<script lang="ts">
  // https://m3.material.io/components/top-app-bar/specs

  import MenuF0W4S24 from '$lib/icons/menu-f0-w4-s24.svelte';
  import ProfileF0W4S24 from '$lib/icons/profile-f0-w4-s24.svelte';

  let prevScroll = 0;
  let curScroll: number;
  let moreThan80 = false;

  let scrollDirection: 'up' | 'down' = 'up';

  $: {
    if (curScroll >= 192 && curScroll > prevScroll) {
      scrollDirection = 'down';
    } else if (curScroll < prevScroll) {
      scrollDirection = 'up';
    }

    if (curScroll >= 64) {
      moreThan80 = true;
    } else {
      moreThan80 = false;
    }
    prevScroll = curScroll;
  }
</script>

<svelte:window bind:scrollY={curScroll} />

<header
  class="nav-container fixed left-0 top-0 right-0 h-16 transition-transform duration-300 {scrollDirection == 'down'
    ? '-translate-y-16'
    : 'translate-y-0'} ">
  <div
    class="{moreThan80
      ? 'nav-container-inner'
      : ''} title-large flex h-full items-center justify-between transition-colors duration-500">
    <div class="ml-4 mr-6">
      <MenuF0W4S24 />
    </div>
    <h2>Title large</h2>
    <div class="ml-6 mr-4">
      <ProfileF0W4S24 />
    </div>
  </div>
</header>
<div class="py-8" />

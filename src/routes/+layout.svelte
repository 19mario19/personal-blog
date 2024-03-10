<script lang="ts">
  import "../app.css"
  import type { LayoutData } from "./$types"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import { page } from "$app/stores"
  export let data: LayoutData

  const title = $page.data.title
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Navbar />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    background-color: var(--l-35);
  }
</style>

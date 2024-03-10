<script lang="ts">
  import "../app.css"
  import type { LayoutData } from "./$types"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  export let data: LayoutData
</script>

<Navbar />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    background-color: var(--l-35);
    padding: var(--sp-base) var(--sp-lg);
  }
</style>

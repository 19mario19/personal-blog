<script>
  import Container from "$lib/components/shared/Container.svelte"
</script>

<Container>
  <footer>
    <div class="top"></div>
    <div class="bottom">Made in SvelteKit. © 2024</div>
  </footer>
</Container>

<style>
  footer {
    padding: var(--sp-base) var(--sp-lg);
  }

  .bottom {
    text-align: center;
  }
</style>

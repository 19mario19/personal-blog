<script lang="ts">
  import { ContainerDimension, RoutePath } from "$lib/types/types"
  import Container from "./shared/Container.svelte"

  let active: RoutePath = RoutePath.Home

  function setActive(newActive: RoutePath): void {
    active = newActive
  }
</script>

<Container dimentions={ContainerDimension.ExtraLarge}>
  <nav>
    <ul>
      <li>
        <a
          on:click={() => setActive(RoutePath.Home)}
          class:active={active === RoutePath.Home}
          href="/">Home</a
        >
      </li>
      <li>
        <a
          on:click={() => setActive(RoutePath.About)}
          class:active={active === RoutePath.About}
          href="/about">About</a
        >
      </li>
      <li>
        <a
          on:click={() => setActive(RoutePath.Contact)}
          class:active={active === RoutePath.Contact}
          href="/contact">Contact</a
        >
      </li>
    </ul>
  </nav>
</Container>

<style>
  nav {
    display: flex;
  }

  ul {
    display: flex;
    gap: 1rem;

    width: 100%;

    justify-content: end;
    padding: var(--br-sm) var(--br-lg);
  }

  .active {
    color: var(--a);
  }
</style>

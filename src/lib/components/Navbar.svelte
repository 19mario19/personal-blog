<script lang="ts">
  import { ContainerDimension, RoutePath } from "$lib/types/types"
  import Container from "./shared/Container.svelte"

  let active: RoutePath = RoutePath.Home

  function setActive(newActive: RoutePath): void {
    active = newActive
  }
</script>

<div class="container-wrapper">
  <Container dimentions={ContainerDimension.ExtraLarge}>
    <nav>
      <h1>Denali</h1>
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
</div>

<style>
  .container-wrapper {
    background-color: var(--l);
    box-shadow: var(--bs-sm);
    z-index: 9999;
  }

  nav {
    display: flex;
    align-items: center;
    padding: var(--sp-base) var(--sp-lg);
  }

  ul {
    display: flex;
    gap: 1rem;

    width: 100%;

    justify-content: end;
    align-items: center;
  }

  .active {
    color: var(--a);
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
    }

    h1 {
      font-size: var(--fs-lg);
    }

    a {
      font-size: var(--fs-sm);
    }
  }
</style>

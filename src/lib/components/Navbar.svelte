<script lang="ts">
  import { ContainerDimension, RoutePath } from "$lib/types/types"
  import Container from "./shared/Container.svelte"

  let active: RoutePath = RoutePath.Home

  function setActive(e?: Event): void {
    const target = e?.target as HTMLElement
    const newActive = target.dataset.active as RoutePath
    if (newActive) {
      active = newActive as RoutePath
    }
  }
</script>

<div class="container-wrapper">
  <Container dimentions={ContainerDimension.ExtraLarge}>
    <nav>
      <h1>Denali</h1>
      <ul>
        <li>
          <a
            on:click={setActive}
            class:active={active === RoutePath.Home}
            data-active={RoutePath.Home}
            href={RoutePath.Home}>Home</a
          >
        </li>
        <li>
          <a
            on:click={setActive}
            class:active={active === RoutePath.About}
            data-active={RoutePath.About}
            href={RoutePath.About}>About</a
          >
        </li>
        <li>
          <a
            on:click={setActive}
            class:active={active === RoutePath.Contact}
            data-active={RoutePath.Contact}
            href={RoutePath.Contact}>Contact</a
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

    position: sticky;
    top: 0;

    opacity: 0.95;
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

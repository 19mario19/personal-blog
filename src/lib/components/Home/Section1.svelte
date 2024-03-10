<script lang="ts">
  import { ContainerDimension } from "$lib/types/types"
  import Container from "../shared/Container.svelte"
</script>

<Container dimentions={ContainerDimension.ExtraLarge}>
  <div class="section1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum
      voluptatum et rem obcaecati debitis. Quam deserunt, quaerat laborum
      dolores sed consequuntur exercitationem accusantium! Optio officia fugiat
      temporibus eligendi quas ratione nobis inventore unde quaerat,
      voluptatibus assumenda neque odit, consequuntur ipsa aperiam labore
      numquam maiores beatae error quo! Voluptates molestias dolorem nesciunt
      debitis harum at et laborum laudantium culpa rem similique aspernatur
      reprehenderit explicabo, deleniti odio? Magni mollitia ipsum eveniet
      molestias aspernatur, quam est sapiente nihil atque debitis iure eaque
      distinctio fugit perspiciatis voluptas tenetur deleniti quia nostrum
      cumque fuga dolore vero rem neque? Ratione fugiat laboriosam libero
      distinctio. Harum.
    </p>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    padding: var(--sp-base) var(--sp-lg);
  }
</style>

<script lang="ts">
  import { ContainerDimentions } from "$lib/types/types"

  export let dimentions: ContainerDimentions = ContainerDimentions.Big
</script>

<div class="container" style={dimentions}>
  <slot />
</div>




<script lang="ts">
  import { ContainerDimension } from "$lib/types/types"
  import Container from "../shared/Container.svelte"
  import Blog from "../shared/blog/Blog.svelte"

  export let props: Blog[]
</script>

<Container dimentions={ContainerDimension.ExtraLarge}>
  <div class="section1">
    <pre class="json-pre">{JSON.stringify(props, null, 2)}</pre>
  </div>
</Container>

<style>
  .section1 {
    display: flex;
    padding: var(--sp-base) var(--sp-lg);
  }
  .json-pre {
    white-space: pre-wrap; /* Allow the content to wrap */
    word-wrap: break-word; /* Break long words */
    overflow-wrap: break-word; /* Break long words for Firefox */
  }
</style>

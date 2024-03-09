<script lang="ts">
  import type { PageData } from "./$types"
  import Container from "$lib/components/shared/Container.svelte"
  import { ContainerDimension } from "$lib/types/types"
  export let data: PageData
</script>

<Container dimentions={ContainerDimension.ExtraLarge}>
  <!-- Headings -->
  <h1>Welcome to My Blog</h1>
  <h2>Latest Posts</h2>
  <h3>Featured Article</h3>
  <h4>Trending Topics</h4>

  <!-- Paragraphs -->
  <p>This is a sample paragraph demonstrating the default text styles.</p>

  <!-- Links -->
  <a href="/">Home</a>
  <a href="/">About</a>
  <a href="/">Contact</a>

  <!-- Buttons -->
  <button>Subscribe</button>
  <input type="submit" value="Submit" />

  <!-- Inputs -->
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <textarea placeholder="Message"></textarea>

  <!-- Lists -->
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <ol>
    <li>Step 1</li>
    <li>Step 2</li>
    <li>Step 3</li>
  </ol>

  <!-- Blockquote -->
  <blockquote>
    "This is a sample blockquote demonstrating quote styles."
  </blockquote>

  <!-- Table -->
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>32</td>
        <td>Los Angeles</td>
      </tr>
    </tbody>
  </table>

  <!-- Strong text -->
  <p>This is a <strong>bold</strong> text example.</p>
</Container>

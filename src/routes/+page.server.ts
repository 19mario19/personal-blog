import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const title = "Home Page"

  const response = await fetch("/api/posts")
  const { blogPosts } = await response.json()

  return { title, blogPosts }
}) satisfies PageServerLoad

import type { PageServerLoad } from "./$types"
import { ApiRoutePath } from "$lib/types/types"

export const load = (async ({ fetch }) => {
  const title = "Home Page"

  const response = await fetch(ApiRoutePath.Posts)
  const { blogPosts } = await response.json()

  return { title, blogPosts }
}) satisfies PageServerLoad

import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { blogPosts } from "$lib/db/posts"

export const GET: RequestHandler = async () => {
  return json({ blogPosts }, { status: 200 })
}

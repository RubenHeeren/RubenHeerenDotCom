import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import slugify from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("posts").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: slugify(post.data) },
    props: post,
  }));
}

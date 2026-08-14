import { supabase } from "@/lib/supabase/client";
import type { Blog } from "@/types/blog";

export async function getBlogs(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Blogs fetch error:", error);
    return [];
  }

  return data as Blog[];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Blog fetch error:", error);
    return null;
  }

  return data as Blog;
}

import { supabase } from "@/lib/supabase/client";
import type { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Projects fetch error:", error);
    return [];
  }

  return data as Project[];
}

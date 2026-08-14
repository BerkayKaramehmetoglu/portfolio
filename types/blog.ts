export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string | null;
  category: string;
  reading_time: number;
  published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

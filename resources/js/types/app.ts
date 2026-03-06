export type CategoryProps = {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    description: string;
    thumbnail: string;
    featured: string;
    type: string;
    active: boolean;
    menu: boolean;
    home: boolean;
    created_at: any;
    parent: any;
}

export type CategoryFilters = {
  page?: string
  search?: string
}
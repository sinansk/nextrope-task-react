export interface BookType {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

export interface Metadata {
  page: number;
  records_per_page: number;
  total_records: number;
}

export interface BooksType {
  data: BookType[];
  metadata: Metadata;
}

export interface OrderItem {
  id: number;
  quantity: number;
}

export interface OrderResponse {
  id: number;
  order: OrderItem[];
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

export interface OrderRes {
  data: OrderResponse;
}

export interface OrderRequest {
  order: OrderItem[];
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

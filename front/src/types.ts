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

export interface Tag {
  id: number;
  name: string;
}

export interface TagResponse {
  data: Tag[];
  length: number;
}

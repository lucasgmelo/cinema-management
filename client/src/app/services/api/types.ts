export interface GetMoviesResponse {
  _id?: string;
  title?: string;
  link_cover?: string;
  duration?: string;
  genre?: string;
  synopsis?: string;
  director?: string;
  cast?: string[];
  classification?: string;
  start_date?: string;
  end_date?: string;
  price?: number;
  acceptHalf?: boolean;
  sessions?: object;
  managementInfo?: { room: string; hour: string }[];
}

export interface CreateMoviesRequest {
  title?: string;
  link_cover?: string;
  duration?: string;
  genre?: string;
  synopsis?: string;
  director?: string;
  cast?: string[];
  classification?: string;
  start_date?: string;
  end_date?: string;
  price?: number;
  acceptHalf?: boolean;
  sessions?: object;
}

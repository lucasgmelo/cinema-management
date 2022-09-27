import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface GetMoviesResponse {
  title: string;
  link_cover: string;
  duration: string;
  genre: string;
  synopsis: string;
  director: string;
  cast: string[];
  classification: string;
  start_date: string;
  end_date: string;
  price: number;
  acceptHalf: boolean;
  sessions: object;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000';

  getMovies() {
    return this.http.get<GetMoviesResponse[]>(`${this.baseUrl}/movies`);
  }
}

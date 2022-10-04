import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuyTicketRequest, CreateMoviesRequest, GetMoviesResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000';

  getMovies() {
    return this.http.get<GetMoviesResponse[]>(`${this.baseUrl}/movies`);
  }

  getMovie(id: string) {
    return this.http.get<GetMoviesResponse>(`${this.baseUrl}/movies/${id}`);
  }

  registerMovie(data: CreateMoviesRequest) {
    return this.http.post<boolean>(`${this.baseUrl}/movies`, data);
  }

  getTickets(id: string) {
    return this.http.get<BuyTicketRequest>(`${this.baseUrl}/tickets/${id}`);
  }

  buyTicket(data: BuyTicketRequest) {
    return this.http.post<boolean>(`${this.baseUrl}/tickets`, data);
  }
}

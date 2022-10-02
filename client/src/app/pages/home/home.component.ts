import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api/api.service';
import { GetMoviesResponse } from 'src/app/services/api/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  data: GetMoviesResponse[] = [];

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((movies) => (this.data = movies));
  }
}

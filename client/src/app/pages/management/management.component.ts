import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { GetMoviesResponse } from 'src/app/services/api/types';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService, private apiService: ApiService) {}

  data: GetMoviesResponse[] = [];

  ngOnInit(): void {
    if (this.authService.user.access != 'manager') {
      this.route.navigate(['']);
    }

    this.apiService.getMovies().subscribe((movies) => (this.data = movies));
  }

  goToAddMoviePage() {
    this.route.navigate(['adicionar-filme']);
  }
}

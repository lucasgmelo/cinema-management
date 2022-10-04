import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { GetMoviesResponse } from 'src/app/services/api/types';
import { GetNextDates } from 'src/app/utils/date';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(private route: Router, private routeActivated: ActivatedRoute, private apiService: ApiService) {}

  movie: GetMoviesResponse = {};

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.paramMap.get('id')!;
    this.apiService.getMovie(id).subscribe((movie) => (this.movie = movie));
    //this.getNextSevenDays();
  }

  arrDates = this.getNextSevenDays();

  getNextSevenDays() {
    const today = new Date();
    const arrDates = GetNextDates(today, 6);
    console.log(arrDates);
    return arrDates;
  }

  selectedDay = GetNextDates(new Date(), 6)[0].date;

  changeSelectedDay(id: string) {
    this.selectedDay = id;
  }

  goBackToHome() {
    this.route.navigate(['']);
  }

  goToCheckout() {
    this.route.navigate(['/checkout/1']);
  }
}

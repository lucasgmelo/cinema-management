import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs';
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

  movie: GetMoviesResponse = { sessions: [{}] };
  dayInfo: { [key: string]: any }[] = [];
  session: any;

  arrDates = this.getNextSevenDays();
  selectedDay = GetNextDates(new Date(), 6)[0].date;

  room1 = false;
  room2 = false;
  room3 = false;
  room4 = false;

  arrRoom1: Array<{ hour: string; available: boolean }> = [];
  arrRoom2: Array<{ hour: string; available: boolean }> = [];
  arrRoom3: Array<{ hour: string; available: boolean }> = [];
  arrRoom4: Array<{ hour: string; available: boolean }> = [];

  async ngOnInit(): Promise<void> {
    const id = this.routeActivated.snapshot.paramMap.get('id')!;
    this.apiService.getMovie(id).subscribe({
      next: (data) => {
        this.movie = data;
        this.getDayInfo(data);
      },
    });
  }

  getNextSevenDays() {
    const today = new Date();
    const arrDates = GetNextDates(today, 6);
    return arrDates;
  }

  changeSelectedDay(id: string) {
    this.selectedDay = id;

    this.arrRoom1 = [];
    this.arrRoom2 = [];
    this.arrRoom3 = [];
    this.arrRoom4 = [];

    this.room1 = false;
    this.room2 = false;
    this.room3 = false;
    this.room4 = false;

    this.getDayInfo(this.movie);
  }

  getDayInfo(data: GetMoviesResponse) {
    this.dayInfo = data.sessions[`${this.selectedDay}/2022`];

    this.dayInfo.forEach((current) => {
      if (current['room'] === '1') {
        this.room1 = true;
        this.arrRoom1.push({ hour: current['hour'], available: current['available'] });
      }
      if (current['room'] === '2') {
        this.room2 = true;
        this.arrRoom2.push({ hour: current['hour'], available: current['available'] });
      }
      if (current['room'] === '3') {
        this.room3 = true;
        this.arrRoom3.push({ hour: current['hour'], available: current['available'] });
      }
      if (current['room'] === '4') {
        this.room4 = true;
        this.arrRoom4.push({ hour: current['hour'], available: current['available'] });
      }
    });
  }

  goBackToHome() {
    this.route.navigate(['']);
  }

  goToCheckout(hour: string, room: string) {
    this.route.navigate(['/checkout', this.movie._id], {
      queryParams: { data: this.selectedDay, hour: hour, room: room },
    });
  }
}

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

  movie: GetMoviesResponse = {};
  dayInfo: any = [];
  session: any;

  arrDates = this.getNextSevenDays();
  selectedDay = GetNextDates(new Date(), 6)[0].date;
  room1 = false;
  room2 = false;
  room3 = false;
  room4 = false;
  arrRoom1: Array<{hour: string, available: boolean}> = [];
  arrRoom2: Array<{hour: string, available: boolean}> = [];
  arrRoom3: Array<{hour: string, available: boolean}> = [];
  arrRoom4: Array<{hour: string, available: boolean}> = [];

  async ngOnInit(): Promise<void> {
    const id = this.routeActivated.snapshot.paramMap.get('id')!;
    this.apiService.getMovie(id).subscribe({next: data => {this.movie = data
    this.getDayInfo(data)}});
    this.getSessionsByRoom();
  }


  getNextSevenDays() {
    const today = new Date();
    const arrDates = GetNextDates(today, 6);
    //console.log(arrDates);
    return arrDates;
  }


  changeSelectedDay(id: string) {
    this.selectedDay = id;
  }

  getDayInfo(data: GetMoviesResponse) {
    //this.dayInfo = Object.entries(data.sessions[`${this.selectedDay}/2022`]);
    //console.log(this.dayInfo[0][1]);
    this.dayInfo = data.sessions[`${this.selectedDay}/2022`];
    console.log(Object.entries(this.dayInfo[0]));
  }

  getSessionsByRoom() {
    this.dayInfo.forEach(data: (string: any) => console.log(data))
  }

  goBackToHome() {
    this.route.navigate(['']);
  }

  goToCheckout() {
    this.route.navigate(['/checkout/1']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movieCover !: string;
  @Input() movieTitle !: string; 
  @Input() duration !: string;
  @Input() genre !: string;
  @Input() synopsis !: string;
  @Input() director !: string;
  @Input() cast !: string;
  @Input() pr !: string;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  selectedDay = 0;

  changeSelectedDay(id: number) {
    this.selectedDay = id;
  }

  goBackToHome() {
    this.route.navigate(['']);
  }

  goToCheckout() {
    this.route.navigate(['/checkout/1']);
  }
}

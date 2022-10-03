import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {
  @Input() id!: string;
  @Input() movieCover!: string;
  @Input() movieTitle!: string;
  @Input() synopsis!: string;
  @Input() duration!: string;
  @Input() genre!: string;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToMoviePage(id: string) {
    this.route.navigate(['/filme/', id]);
  }
}

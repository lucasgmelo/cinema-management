import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movieCover !: string;
  @Input() movieTitle !: string; 
  @Input() synopsis !: string;
  @Input() duration !: string;
  @Input() genre !: string;

  constructor() { }

  ngOnInit(): void {
  }

}

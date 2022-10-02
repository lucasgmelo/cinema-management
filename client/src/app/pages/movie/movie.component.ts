import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  id: any;

  constructor(private route: Router, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      console.log(params)
      this.id = params['movie-id'];
    });
    console.log(this.id);
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

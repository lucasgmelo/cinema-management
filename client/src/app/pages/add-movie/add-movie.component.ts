import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goBackToManagement() {
    this.route.navigate(['gerenciar']);
  }
}

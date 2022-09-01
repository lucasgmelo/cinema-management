import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToAddMoviePage() {
    this.route.navigate(['adicionar-filme']);
  }
}

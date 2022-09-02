import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-card',
  templateUrl: './management-card.component.html',
  styleUrls: ['./management-card.component.scss'],
})
export class ManagementCardComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToEditPage() {
    this.route.navigate(['editar-filme']);
  }
}

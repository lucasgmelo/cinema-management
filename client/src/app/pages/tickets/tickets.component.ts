import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { TicketType } from 'src/app/services/api/types';
import { AuthService, User } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService, private apiService: ApiService) {}

  tickets: TicketType[] = [];

  ngOnInit(): void {
    const currentUser: User = JSON.parse(localStorage.getItem('user') || '{}');
    this.apiService.getTickets(currentUser.id!).subscribe((data) => {
      this.tickets = data.tickets!;
    });

    if (this.authService.user.access != 'customer') {
      this.route.navigate(['']);
    }
  }
}

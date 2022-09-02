import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  constructor(private route: Router, private authService:AuthService) {}

  ngOnInit(): void {

    if(this.authService.user.access != 'manager'){
      this.route.navigate([''])
    }

  }

  goToAddMoviePage() {
    this.route.navigate(['adicionar-filme']);
  }
}

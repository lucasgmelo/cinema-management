import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private route:Router, private authService:AuthService) { }

  data = [{
    cover: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/07/07/thor-urhbljnp6asx.jpg',
    title: 'Thor: Amor e Trovão',
    theater: 'Sala 3',
    date: '06/09/2022',
    hour: '17:00',
    seats: 'C4, C5'
  },
  {
    cover: 'https://br.web.img2.acsta.net/pictures/22/05/18/09/51/0772429.jpg',
    title: 'Elvis',
    theater: 'Sala 2',
    date: '18/07/2022',
    hour: '19:00',
    seats: 'F9, F10, F11'
  },
  {
    cover: 'https://www.claquete.com.br/fotos/filmes/poster/14943_medio.jpg',
    title: 'Pinocchio: O Menino De Madeira',
    theater: 'Sala 4',
    date: '12/09/2022',
    hour: '19:30',
    seats: 'D7, D8'
  }]

  ngOnInit(): void {
    if(this.authService.user.access != 'customer'){
      this.route.navigate([''])
    }
  }

}
